import { useState, useRef, type ReactNode } from "react";
import Heading from "@/components/Heading";
import styles from "./index.module.css";

const 属性击破系数 = {
  物理: 2,
  火: 2,
  风: 1.5,
  冰: 1,
  雷: 1,
  量子: 0.5,
  虚数: 0.5,
};

const defaultBuffs: { [id: string]: Buffs } = {
  角色: [
    ["百分比生命", "行迹", 10],
    ["百分比生命", "光锥", 18],
    ["暴击伤害", "天赋+四魂", 68.4 * 5],
    ["暴击伤害", "行迹", 37.3],
    ["暴击伤害", "一魂", 36],
    ["增伤", "光锥", 60],
    ["减抗", "六魂", 30],
  ],
  遗器: [
    ["固定生命", "头部", 705],
    ["固定攻击", "手部", 352],
    ["百分比生命", "衣服+12副词条", 90.7],
    ["暴击伤害", "8副词条", 46.3],
    ["增伤", "球", 38.4],
    ["增伤", "学者套+行迹大招增伤", 40],
  ],
  辅助1: [
    ["增伤", "战技", 72],
    ["增伤", "行迹", 10],
    ["增伤", "日专", 45],
    ["暴击伤害", "大招覆盖率1/3", 18.4],
  ],
  辅助2: [
    ["易伤", "大招", 30],
    ["减抗", "战技", 24],
    ["真伤", "一魂", 24],
    ["暴击伤害", "缇专", 48],
  ],
  辅助3: [
    ["固定生命", "大招", 600],
    ["百分比生命", "大招", 30],
    ["百分比生命", "一魂", 50],
    ["易伤", "光锥", 18],
    ["暴击伤害", "女武神套", 15],
  ],
};

const buffKind = [
  "百分比攻击",
  "百分比生命",
  "百分比防御",
  "固定攻击",
  "固定生命",
  "固定防御",
  "增伤",
  "暴击伤害",
  "击破特攻",
  "击破增伤",
  "易伤",
  "减防",
  "减抗",
  "真伤",
  "独立乘区",
] as const;

const 词条: { [kind in (typeof buffKind)[number]]: number } = {
  百分比攻击: 4.32,
  百分比生命: 4.32,
  百分比防御: 5.4,
  固定攻击: 21.169,
  固定生命: 42.338,
  固定防御: 21.169,
  增伤: 3.84,
  暴击伤害: 6.48,
  击破特攻: 6.48,
  击破增伤: 1,
  易伤: 1,
  减防: 1,
  减抗: 1,
  真伤: 1,
  独立乘区: 1,
};

type BuffKind = (typeof buffKind)[number];

type Buffs = [BuffKind, string, number][];

// TODO: make safer
const safeEval = (x: string) => {
  // eslint-disable-next-line no-eval, @typescript-eslint/no-unnecessary-condition
  const res: unknown = eval?.(x);
  if (typeof res !== "number") throw new TypeError("Result must be number");
  return res;
};

function aggregateBuffs(allBuffs: { [id: string]: Buffs }): {
  [kind in BuffKind]: number;
} {
  const res = Object.fromEntries(buffKind.map((k) => [k, 0])) as {
    [kind in BuffKind]: number;
  };
  for (const buffs of Object.values(allBuffs))
    for (const [kind, , value] of buffs) res[kind] += value;
  return res;
}

function StackedEquations({ children }: { readonly children: ReactNode }) {
  return (
    <div className={styles.stackedEquationsContainer}>
      <div className={styles.leftBracket} />
      <div className={styles.stackedEquations}>{children}</div>
      <div className={styles.rightBracket} />
    </div>
  );
}

function AnnotatedStat({
  stat,
  label,
  percentage,
}: {
  readonly stat: number;
  readonly label: string;
  readonly percentage?: boolean;
}) {
  return (
    <ruby>
      {Math.round(stat * 100) / 100}
      <rt>{label}</rt>
      {percentage ? "%" : null}
    </ruby>
  );
}

function BuffTable({
  id,
  buffs,
  setBuffs,
}: {
  readonly id: string;
  readonly buffs: Buffs;
  readonly setBuffs: (newValue: Buffs) => void;
}) {
  const [isAdding, setIsAdding] = useState(false);
  const buffKindRef = useRef<HTMLSelectElement>(null);
  const buffSourceRef = useRef<HTMLInputElement>(null);
  const buffValueRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>属性</th>
            <th>来源</th>
            <th>数值</th>
          </tr>
        </thead>
        <tbody>
          {buffs.map(([field, source, value], i) => (
            <tr key={`${id}-${field}-${source}`}>
              <th>
                <label htmlFor={`${id}${field}-${i}`}>{field}</label>
              </th>
              <td>{source}</td>
              <td>
                <input
                  id={`${id}${field}-${i}`}
                  defaultValue={value}
                  onChange={(e) => {
                    try {
                      const newValue = safeEval(e.target.value);
                      const copy = [...buffs];
                      copy[i]![2] = newValue;
                      setBuffs(copy);
                    } catch (err) {
                      e.target.setCustomValidity((err as Error).message);
                    }
                  }}
                />
                {field.startsWith("固定") ? null : "%"}
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    const copy = [...buffs];
                    copy.splice(i, 1);
                    setBuffs(copy);
                  }}>
                  ×
                </button>
              </td>
            </tr>
          ))}
          {isAdding && (
            <tr>
              <th>
                <select ref={buffKindRef}>
                  {buffKind.map((k) => (
                    <option key={k} value={k}>
                      {k}
                    </option>
                  ))}
                </select>
              </th>
              <td>
                <input
                  aria-label="Buff source"
                  ref={buffSourceRef}
                  defaultValue=""
                />
              </td>
              <td>
                <input
                  aria-label="Buff value"
                  ref={buffValueRef}
                  defaultValue="0"
                />
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    // eslint-disable-next-line no-useless-assignment
                    let value = 0;
                    try {
                      value = safeEval(buffValueRef.current!.value);
                    } catch (err) {
                      buffValueRef.current!.setCustomValidity(
                        (err as Error).message,
                      );
                      return;
                    }
                    if (
                      buffs.some(
                        (b) =>
                          b[0] === buffKindRef.current!.value &&
                          b[1] === buffSourceRef.current!.value,
                      )
                    ) {
                      buffSourceRef.current!.setCustomValidity(
                        "已经有相同属性和来源的增益",
                      );
                      return;
                    }
                    const newBuff: [BuffKind, string, number] = [
                      buffKindRef.current!.value as BuffKind,
                      buffSourceRef.current!.value,
                      value,
                    ];
                    setBuffs([...buffs, newBuff]);
                    setIsAdding(false);
                  }}>
                  √
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsAdding(false);
                  }}>
                  ×
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <button
        type="button"
        className={styles.addBuffBtn}
        onClick={() => setIsAdding(true)}>
        +
      </button>
    </div>
  );
}

function calcDamage(
  buffs: { [id: string]: Buffs },
  {
    角色等级,
    属性击破倍率,
    基础攻击,
    基础生命,
    基础防御,
    攻击倍率,
    生命倍率,
    防御倍率,
    实际削韧值,
    超击破倍率,
    DOT倍率,
    敌人等级,
    敌人抗性,
    韧性上限,
    韧性状态,
  }: {
    角色等级: number;
    属性击破倍率: number;
    基础攻击: number;
    基础生命: number;
    基础防御: number;
    攻击倍率: number;
    生命倍率: number;
    防御倍率: number;
    实际削韧值: number;
    超击破倍率: number;
    DOT倍率: number;
    敌人等级: number;
    敌人抗性: number;
    韧性上限: number;
    韧性状态: "未击破" | "击破" | "已击破";
  },
): number {
  const {
    百分比攻击,
    百分比生命,
    百分比防御,
    固定攻击,
    固定生命,
    固定防御,
    增伤,
    暴击伤害,
    击破特攻,
    击破增伤,
    易伤,
    减防,
    减抗,
    真伤,
    独立乘区,
  } = aggregateBuffs(buffs);
  const 面板攻击 = 基础攻击 * (1 + 百分比攻击 / 100) + 固定攻击;
  const 面板生命 = 基础生命 * (1 + 百分比生命 / 100) + 固定生命;
  const 面板防御 = 基础防御 * (1 + 百分比防御 / 100) + 固定防御;
  const 基础直伤 =
    (攻击倍率 / 100) * 面板攻击 +
    (生命倍率 / 100) * 面板生命 +
    (防御倍率 / 100) * 面板防御;
  const 直伤dot伤 =
    (基础直伤 * (1 + 暴击伤害 / 100) + (DOT倍率 / 100) * 面板攻击) *
    (1 + 增伤 / 100);
  const 普通击破 =
    韧性状态 === "击破"
      ? (属性击破倍率 / 100) * 3767.55 * (韧性上限 / 40 + 0.5)
      : 0;
  const 超击破 =
    韧性状态 === "未击破"
      ? 0
      : ((超击破倍率 / 100) * 3767.55 * 实际削韧值) / 10;
  const 击破伤 =
    (普通击破 + 超击破) * (1 + 击破特攻 / 100) * (1 + 击破增伤 / 100);
  const 防御 =
    (角色等级 + 20) /
    (角色等级 + 20 + (敌人等级 + 20) * (1 - Math.min(减防 / 100, 1)));
  const 抗性 = Math.max(-100, Math.min(敌人抗性 - 减抗, 90));
  const damage =
    (直伤dot伤 + 击破伤) *
    (1 + 易伤 / 100) *
    防御 *
    (1 - 抗性 / 100) *
    (1 + 真伤 / 100) *
    (1 + 独立乘区 / 100);
  return damage;
}

export default function StarRailDamage(): ReactNode {
  /* eslint-disable react/hook-use-state */
  const [角色等级, set角色等级] = useState(80);
  const [属性击破倍率, set属性击破倍率] = useState(属性击破系数.冰);
  const [基础攻击, set基础攻击] = useState(1155);
  const [基础生命, set基础生命] = useState(2811);
  const [基础防御, set基础防御] = useState(882);
  const [攻击倍率, set攻击倍率] = useState(0);
  const [生命倍率, set生命倍率] = useState(245);
  const [防御倍率, set防御倍率] = useState(0);
  const [实际削韧值, set实际削韧值] = useState(0);
  const [超击破倍率, set超击破倍率] = useState(0);
  const [DOT倍率, setDOT倍率] = useState(0);
  const [敌人等级, set敌人等级] = useState(95);
  const [敌人抗性, set敌人抗性] = useState(0);
  const [韧性上限, set韧性上限] = useState(0);
  const [韧性状态, set韧性状态] = useState<"未击破" | "击破" | "已击破">(
    "未击破",
  );
  /* eslint-enable react/hook-use-state */

  const [buffs, setBuffs] = useState<{ [id: string]: Buffs }>(defaultBuffs);
  const {
    百分比攻击,
    百分比生命,
    百分比防御,
    固定攻击,
    固定生命,
    固定防御,
    增伤,
    暴击伤害,
    击破特攻,
    击破增伤,
    易伤,
    减防,
    减抗,
    真伤,
    独立乘区,
  } = aggregateBuffs(buffs);
  const params = {
    角色等级,
    属性击破倍率,
    基础攻击,
    基础生命,
    基础防御,
    攻击倍率,
    生命倍率,
    防御倍率,
    实际削韧值,
    超击破倍率,
    DOT倍率,
    敌人等级,
    敌人抗性,
    韧性上限,
    韧性状态,
  };
  const damage = calcDamage(buffs, params);

  return (
    <div>
      <h1>星铁伤害计算器</h1>
      <p>一些参考：</p>
      <ul>
        <li>
          主词条：43.2%生命/43.2%攻击/54.0%防御/38.4%增伤/64.8%暴伤/64.8%击破特攻
        </li>
        <li>
          角色基础面板/技能组：
          <a
            href="https://homdgcat.wiki/sr/char"
            rel="noopener noreferrer"
            target="_blank">
            玉衡杯
          </a>
        </li>
        <li>敌人抗性有弱点为 0，无弱点默认 20%，额外抗性另标</li>
      </ul>
      <p>
        <strong>注：</strong>
      </p>
      <ul>
        <li>假设满暴击率。如果未满暴，可以按照 (暴击率×暴击伤害) 计算期望</li>
        <li>
          目前考虑不了角色打多种属性伤害，比如停云赐福雷属性附加伤害、海瑟音多颜色DOT等，这些会影响倍率区、增伤区、抗性区的计算
        </li>
        <li>
          目前考虑不了特定伤害类型乘区，比如系囚套DOT减防、繁星套战技增伤等
        </li>
        <li>
          基于以上两点，建议一次算一种属性一种伤害类型，然后再把多个伤害来源相加
        </li>
        <li>
          光锥、星魂因为涉及机制和基础面板，不属于可调整的配置，如需调整需要手动计算。光锥和星魂效果属于自拐
        </li>
        <li>
          非完全覆盖的buff（如大公套、辅助buff、需要叠层的自拐等）请自行评估覆盖率
        </li>
        <li>
          倍率拐（如同谐主）和附伤（如缇宝）无法统计，倍率请填在角色基础倍率中，附伤请单独计算
        </li>
        <li>
          下面的输入框支持基本数学表达式，如<code>44*5</code>
        </li>
      </ul>
      <Heading level={2}>敌人基础数值</Heading>
      <table>
        <tr>
          <th>
            <label htmlFor="敌人等级">等级</label>
          </th>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <td>
            <input
              id="敌人等级"
              defaultValue={敌人等级}
              onChange={(e) => {
                try {
                  set敌人等级(safeEval(e.target.value));
                } catch (err) {
                  e.target.setCustomValidity((err as Error).message);
                }
              }}
            />
          </td>
          <th>
            <label htmlFor="敌人抗性">抗性</label>
          </th>
          <td>
            <input
              id="敌人抗性"
              defaultValue={敌人抗性}
              onChange={(e) => {
                try {
                  set敌人抗性(safeEval(e.target.value));
                } catch (err) {
                  e.target.setCustomValidity((err as Error).message);
                }
              }}
            />
            %
          </td>
        </tr>
        <tr>
          <th>
            <label htmlFor="韧性上限">韧性上限</label>
          </th>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <td>
            <input
              id="韧性上限"
              defaultValue={韧性上限}
              onChange={(e) => {
                try {
                  set韧性上限(safeEval(e.target.value));
                } catch (err) {
                  e.target.setCustomValidity((err as Error).message);
                }
              }}
            />
          </td>
          <th>
            <label htmlFor="韧性状态">韧性状态</label>
          </th>
          <td>
            <select
              id="韧性状态"
              defaultValue={韧性状态}
              onChange={(e) => {
                set韧性状态(
                  e.target.selectedOptions[0]!.value as
                    | "未击破"
                    | "击破"
                    | "已击破",
                );
              }}>
              <option>未击破</option>
              <option>击破</option>
              <option>已击破</option>
            </select>
          </td>
        </tr>
      </table>
      <Heading level={2}>角色基础数值</Heading>
      <table>
        <tr>
          <th>
            <label htmlFor="等级">等级</label>
          </th>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <td>
            <input
              id="等级"
              defaultValue={角色等级}
              onChange={(e) => {
                try {
                  set角色等级(safeEval(e.target.value));
                } catch (err) {
                  e.target.setCustomValidity((err as Error).message);
                }
              }}
            />
          </td>
          <th>
            <label htmlFor="属性">属性</label>
          </th>
          <td>
            <select
              id="属性"
              defaultValue="冰"
              onChange={(e) => {
                set属性击破倍率(
                  属性击破系数[
                    e.target.selectedOptions[0]!
                      .value as keyof typeof 属性击破系数
                  ],
                );
              }}>
              {Object.keys(属性击破系数).map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
          </td>
        </tr>
        <tr>
          <th>
            <label htmlFor="基础攻击">基础攻击</label>
          </th>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <td>
            <input
              id="基础攻击"
              defaultValue={基础攻击}
              onChange={(e) => {
                try {
                  set基础攻击(safeEval(e.target.value));
                } catch (err) {
                  e.target.setCustomValidity((err as Error).message);
                }
              }}
            />
          </td>
          <th>
            <label htmlFor="直伤攻击倍率">直伤攻击倍率</label>
          </th>
          <td>
            <input
              id="直伤攻击倍率"
              defaultValue={攻击倍率}
              onChange={(e) => {
                try {
                  set攻击倍率(safeEval(e.target.value));
                } catch (err) {
                  e.target.setCustomValidity((err as Error).message);
                }
              }}
            />
            %
          </td>
        </tr>
        <tr>
          <th>
            <label htmlFor="基础生命">基础生命</label>
          </th>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <td>
            <input
              id="基础生命"
              defaultValue={基础生命}
              onChange={(e) => {
                try {
                  set基础生命(safeEval(e.target.value));
                } catch (err) {
                  e.target.setCustomValidity((err as Error).message);
                }
              }}
            />
          </td>
          <th>
            <label htmlFor="直伤生命倍率">直伤生命倍率</label>
          </th>
          <td>
            <input
              id="直伤生命倍率"
              defaultValue={生命倍率}
              onChange={(e) => {
                try {
                  set生命倍率(safeEval(e.target.value));
                } catch (err) {
                  e.target.setCustomValidity((err as Error).message);
                }
              }}
            />
            %
          </td>
        </tr>
        <tr>
          <th>
            <label htmlFor="基础防御">基础防御</label>
          </th>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <td>
            <input
              id="基础防御"
              defaultValue={基础防御}
              onChange={(e) => {
                try {
                  set基础防御(safeEval(e.target.value));
                } catch (err) {
                  e.target.setCustomValidity((err as Error).message);
                }
              }}
            />
          </td>
          <th>
            <label htmlFor="直伤防御倍率">直伤防御倍率</label>
          </th>
          <td>
            <input
              id="直伤防御倍率"
              defaultValue={防御倍率}
              onChange={(e) => {
                try {
                  set防御倍率(safeEval(e.target.value));
                } catch (err) {
                  e.target.setCustomValidity((err as Error).message);
                }
              }}
            />
            %
          </td>
        </tr>
        <tr>
          <th>
            <label htmlFor="实际削韧值">实际削韧值</label>
          </th>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <td>
            <input
              id="实际削韧值"
              defaultValue={实际削韧值}
              onChange={(e) => {
                try {
                  set实际削韧值(safeEval(e.target.value));
                } catch (err) {
                  e.target.setCustomValidity((err as Error).message);
                }
              }}
            />
          </td>
          <th>
            <label htmlFor="超击破倍率">超击破倍率</label>
          </th>
          <td>
            <input
              id="超击破倍率"
              defaultValue={超击破倍率}
              onChange={(e) => {
                try {
                  set超击破倍率(safeEval(e.target.value));
                } catch (err) {
                  e.target.setCustomValidity((err as Error).message);
                }
              }}
            />
            %
          </td>
        </tr>
        <tr>
          <th>
            <label htmlFor="DOT倍率">DOT倍率</label>
          </th>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <td>
            <input
              id="DOT倍率"
              defaultValue={DOT倍率}
              onChange={(e) => {
                try {
                  setDOT倍率(safeEval(e.target.value));
                } catch (err) {
                  e.target.setCustomValidity((err as Error).message);
                }
              }}
            />
          </td>
        </tr>
      </table>
      <Heading level={2}>角色自拐</Heading>
      <BuffTable
        id="角色"
        buffs={buffs.角色!}
        setBuffs={(value) => setBuffs({ ...buffs, 角色: value })}
      />
      <Heading level={2}>角色遗器方案</Heading>
      <BuffTable
        id="遗器"
        buffs={buffs.遗器!}
        setBuffs={(value) => setBuffs({ ...buffs, 遗器: value })}
      />
      <Heading level={2}>辅助1</Heading>
      <BuffTable
        id="辅助1"
        buffs={buffs.辅助1!}
        setBuffs={(value) => setBuffs({ ...buffs, 辅助1: value })}
      />
      <Heading level={2}>辅助2</Heading>
      <BuffTable
        id="辅助2"
        buffs={buffs.辅助2!}
        setBuffs={(value) => setBuffs({ ...buffs, 辅助2: value })}
      />
      <Heading level={2}>辅助3</Heading>
      <BuffTable
        id="辅助3"
        buffs={buffs.辅助3!}
        setBuffs={(value) => setBuffs({ ...buffs, 辅助3: value })}
      />
      <Heading level={2}>最终伤害</Heading>
      <div>
        <StackedEquations>
          <div className={styles.equationLine}>
            <StackedEquations>
              <div className={styles.equationLine}>
                <StackedEquations>
                  {/* prettier-ignore */}
                  <p><AnnotatedStat stat={攻击倍率} label="攻击倍率" percentage /> × (<AnnotatedStat stat={基础攻击} label="基础攻击" /> × (1 + <AnnotatedStat stat={百分比攻击} label="百分比攻击" percentage />) + <AnnotatedStat stat={固定攻击} label="固定攻击" />)</p>
                  {/* prettier-ignore */}
                  <p><AnnotatedStat stat={生命倍率} label="生命倍率" percentage /> × (<AnnotatedStat stat={基础生命} label="基础生命" /> × (1 + <AnnotatedStat stat={百分比生命} label="百分比生命" percentage />) + <AnnotatedStat stat={固定生命} label="固定生命" />)</p>
                  {/* prettier-ignore */}
                  <p><AnnotatedStat stat={防御倍率} label="防御倍率" percentage /> × (<AnnotatedStat stat={基础防御} label="基础防御" /> × (1 + <AnnotatedStat stat={百分比防御} label="百分比防御" percentage />) + <AnnotatedStat stat={固定防御} label="固定防御" />)</p>
                </StackedEquations>
                {/* prettier-ignore */}
                <p>× (1 + <AnnotatedStat stat={暴击伤害} label="暴击伤害" percentage />)</p>
              </div>
              {/* prettier-ignore */}
              <p><AnnotatedStat stat={DOT倍率} label="DOT倍率" percentage /> × (<AnnotatedStat stat={基础攻击} label="基础攻击" /> × (1 + <AnnotatedStat stat={百分比攻击} label="百分比攻击" percentage />) + <AnnotatedStat stat={固定攻击} label="固定攻击" />)</p>
            </StackedEquations>
            {/* prettier-ignore */}
            <p>× (1 + <AnnotatedStat stat={增伤} label="增伤" percentage />)</p>
          </div>
          {韧性状态 !== "未击破" && (
            <div className={styles.equationLine}>
              <StackedEquations>
                {/* prettier-ignore */}
                {韧性状态 === "击破" && (
                  <p>
                    <AnnotatedStat
                      stat={属性击破倍率}
                      label="属性击破倍率"
                      percentage
                    />{" "}
                    × 3767.55 × (
                    <AnnotatedStat stat={韧性上限} label="韧性上限" /> / 40 +
                    0.5)
                  </p>
                )}
                {/* prettier-ignore */}
                <p><AnnotatedStat stat={超击破倍率} label="超击破倍率" percentage /> × 3767.55 × <AnnotatedStat stat={实际削韧值} label="实际削韧值" /> / 10</p>
              </StackedEquations>
              {/* prettier-ignore */}
              <p>× (1 + <AnnotatedStat stat={击破特攻} label="击破特攻" percentage />) × (1 + <AnnotatedStat stat={击破增伤} label="击破增伤" percentage />)</p>
            </div>
          )}
        </StackedEquations>
        {/* prettier-ignore */}
        <p>× (1 + <AnnotatedStat stat={易伤} label="易伤" percentage />)</p>
        {/* prettier-ignore */}
        <p>× (<AnnotatedStat stat={角色等级} label="角色等级" /> + 20) / (<AnnotatedStat stat={角色等级} label="角色等级" /> + 20 + (<AnnotatedStat stat={敌人等级} label="敌人等级" /> + 20) × (1 － min(<AnnotatedStat stat={减防} label="减防" percentage />, 100%)))</p>
        {/* prettier-ignore */}
        <p>× (1 － clamp(－100%, <AnnotatedStat stat={敌人抗性} label="敌人抗性" percentage /> － <AnnotatedStat stat={减抗} label="减抗" percentage />, 90%))</p>
        {/* prettier-ignore */}
        <p>× (1 + <AnnotatedStat stat={真伤} label=" 真伤" percentage />)</p>
        {/* prettier-ignore */}
        <p>× (1 + <AnnotatedStat stat={独立乘区} label="独立乘区" percentage />)</p>
      </div>
      <output>
        = <strong>{Math.round(damage)}</strong>
      </output>
      <Heading level={2}>词条收益</Heading>
      <table>
        <thead>
          <tr>
            <th>属性</th>
            <th>单词条数值</th>
            <th>伤害提升</th>
          </tr>
        </thead>
        <tbody>
          {buffKind
            .map((kind) => {
              const deltaBuffs = { ...buffs };
              deltaBuffs.测试 = [[kind, "测试", 词条[kind]]];
              const deltaDamage =
                ((calcDamage(deltaBuffs, params) - damage) / damage) * 100;
              return [
                deltaDamage,
                <tr key={kind}>
                  <th>{kind}</th>
                  <td>{词条[kind]}</td>
                  <td>{deltaDamage.toFixed(2)}%</td>
                </tr>,
              ] as const;
            })
            .filter((a) => a[0] > 0)
            .sort((a, b) => b[0] - a[0])
            .map((x) => x[1])}
        </tbody>
      </table>
    </div>
  );
}

export const meta = {
  title: "Star Rail damage calculator",
  description:
    "Estimate the damage with any given team & buffs in Honkai: Star Rail",
};
