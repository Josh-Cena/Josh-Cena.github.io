import type { ReactNode } from "react";
import clsx from "clsx";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import Heading from "@/components/Heading";
import Tabs from "@/components/Tabs";
import {
  sources,
  type PullRecordData,
  角色,
  光锥,
  常驻,
  赠送,
  卡池,
  专武,
} from "./_pulls-data";
import styles from "./pulls.module.css";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  ChartTooltip,
  Legend,
);

function getThemeColor(variable: string): string {
  if (typeof window === "undefined") return "black";
  return getComputedStyle(document.documentElement).getPropertyValue(variable);
}

function CharImg({
  name,
  gray,
  eidolon,
  style,
}: {
  readonly name: string;
  readonly gray?: boolean;
  readonly eidolon?: number;
  readonly style?: React.CSSProperties;
}): ReactNode {
  const source = sources[name as keyof typeof sources];
  return (
    <span className={styles.charContainer} style={style}>
      <img
        src={source}
        alt={name}
        width={160}
        height={188}
        className={clsx(styles.charImg, gray && styles.gray)}
      />
      {
        // Note: only define when it's positive
        eidolon ? <span className={styles.eidolon}>{eidolon}</span> : null
      }
    </span>
  );
}

type Point = { x: string; y: number };

function StatsGraph(): ReactNode {
  const charStats = {
    totalFiveStar: [] as Point[],
    totalLimited: [] as Point[],
    totalPulls: [] as Point[],
    averagePulls: [] as Point[],
    averageLimitedPulls: [] as Point[],
    onBannerRate: [] as Point[],
  };
  const lcStats = {
    totalFiveStar: [] as Point[],
    totalLimited: [] as Point[],
    totalPulls: [] as Point[],
    averagePulls: [] as Point[],
    averageLimitedPulls: [] as Point[],
    onBannerRate: [] as Point[],
  };
  const combinedStats = {
    totalFiveStar: [] as Point[],
    totalLimited: [] as Point[],
    totalPulls: [] as Point[],
    averagePulls: [] as Point[],
    averageLimitedPulls: [] as Point[],
    onBannerRate: [] as Point[],
  };
  let fiveStarCharCount = 0;
  let fiveStarLCCount = 0;
  let limitedCharCount = 0;
  let limitedLCCount = 0;
  let charPullCount = 0;
  let lcPullCount = 0;
  let charSoftPityHitCount = 0;
  let lcSoftPityHitCount = 0;
  let charSoftPityCount = 0;
  let lcSoftPityCount = 0;
  let isCharGuaranteed = false;
  let isLCGuaranteed = false;
  for (const version of Object.keys(卡池)) {
    const charRecords = 角色[version as keyof typeof 角色] ?? [];
    const lcRecords = 光锥[version as keyof typeof 光锥] ?? [];
    for (const record of charRecords) {
      fiveStarCharCount++;
      charPullCount += record.pulls;
      if (!isCharGuaranteed) charSoftPityCount++;
      if (!record.offBanner) {
        limitedCharCount++;
        if (!isCharGuaranteed) charSoftPityHitCount++;
        isCharGuaranteed = false;
      } else {
        isCharGuaranteed = true;
      }
    }
    for (const record of lcRecords) {
      fiveStarLCCount++;
      lcPullCount += record.pulls;
      if (!isLCGuaranteed) lcSoftPityCount++;
      if (!record.offBanner) {
        limitedLCCount++;
        if (!isLCGuaranteed) lcSoftPityHitCount++;
        isLCGuaranteed = false;
      } else {
        isLCGuaranteed = true;
      }
    }
    if (charRecords.length) {
      charStats.totalFiveStar.push({ x: version, y: fiveStarCharCount });
      charStats.totalLimited.push({ x: version, y: limitedCharCount });
      charStats.totalPulls.push({ x: version, y: charPullCount });
      charStats.averagePulls.push({
        x: version,
        y: charPullCount / fiveStarCharCount,
      });
      charStats.averageLimitedPulls.push({
        x: version,
        y: charPullCount / limitedCharCount,
      });
      charStats.onBannerRate.push({
        x: version,
        y: (charSoftPityHitCount / charSoftPityCount) * 100,
      });
    }
    if (lcRecords.length) {
      lcStats.totalFiveStar.push({ x: version, y: fiveStarLCCount });
      lcStats.totalLimited.push({ x: version, y: limitedLCCount });
      lcStats.totalPulls.push({ x: version, y: lcPullCount });
      lcStats.averagePulls.push({
        x: version,
        y: lcPullCount / fiveStarLCCount,
      });
      lcStats.averageLimitedPulls.push({
        x: version,
        y: lcPullCount / limitedLCCount,
      });
      lcStats.onBannerRate.push({
        x: version,
        y: (lcSoftPityHitCount / lcSoftPityCount) * 100,
      });
    }
    if (charRecords.length || lcRecords.length) {
      combinedStats.totalFiveStar.push({
        x: version,
        y: fiveStarCharCount + fiveStarLCCount,
      });
      combinedStats.totalLimited.push({
        x: version,
        y: limitedCharCount + limitedLCCount,
      });
      combinedStats.totalPulls.push({
        x: version,
        y: charPullCount + lcPullCount,
      });
      combinedStats.averagePulls.push({
        x: version,
        y:
          (charPullCount + lcPullCount) / (fiveStarCharCount + fiveStarLCCount),
      });
      combinedStats.averageLimitedPulls.push({
        x: version,
        y: (charPullCount + lcPullCount) / (limitedCharCount + limitedLCCount),
      });
      combinedStats.onBannerRate.push({
        x: version,
        y:
          ((charSoftPityHitCount + lcSoftPityHitCount) /
            (charSoftPityCount + lcSoftPityCount)) *
          100,
      });
    }
  }
  function getData1(
    stats: typeof charStats | typeof lcStats | typeof combinedStats,
  ): ChartData<"line", Point[]> {
    return {
      labels: Object.keys(卡池),
      datasets: [
        {
          label: "五星总数",
          data: stats.totalFiveStar,
          borderColor: getThemeColor("--color-pink"),
          yAxisID: "y",
        },
        {
          label: "限定五星数",
          data: stats.totalLimited,
          borderColor: getThemeColor("--color-blue"),
          yAxisID: "y",
        },
        {
          label: "总抽数",
          data: stats.totalPulls,
          borderColor: getThemeColor("--color-yellow"),
          yAxisID: "y1",
        },
      ],
    };
  }

  const options1: ChartOptions<"line"> = {
    animation: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          title(context) {
            return `${context[0]!.label}: ${卡池[context[0]!.label as keyof typeof 卡池]!.join("/")}`;
          },
          label(context) {
            console.log(context);
            return `${context.dataset.label!}: ${context.parsed.y!}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "版本",
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "五星数",
        },
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y1: {
        position: "right" as const,
        title: {
          display: true,
          text: "总抽数",
        },
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };
  function getData2(
    stats: typeof charStats | typeof lcStats | typeof combinedStats,
  ): ChartData<"line", Point[]> {
    return {
      labels: Object.keys(卡池),
      datasets: [
        {
          label: "平均五星抽数",
          data: stats.averagePulls,
          borderColor: getThemeColor("--color-blue"),
          yAxisID: "y",
        },
        {
          label: "平均限定五星抽数",
          data: stats.averageLimitedPulls,
          borderColor: getThemeColor("--color-pink"),
          yAxisID: "y",
        },
        {
          label: "小保底不歪率",
          data: stats.onBannerRate,
          borderColor: getThemeColor("--color-yellow"),
          yAxisID: "y1",
        },
      ],
    };
  }

  const options2: ChartOptions<"line"> = {
    animation: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          title(context) {
            return `${context[0]!.label}: ${卡池[context[0]!.label as keyof typeof 卡池]!.join("/")}`;
          },
          label(context) {
            console.log(context);
            return `${context.dataset.label!}: ${context.parsed.y!.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "版本",
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "抽数",
        },
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y1: {
        position: "right" as const,
        title: {
          display: true,
          text: "不歪率",
        },
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };

  function getData3(
    type: "角色" | "光锥" | "综合",
  ): ChartData<"line", { x: string; y: number }[]> {
    return {
      labels: Object.keys(卡池),
      datasets: [
        {
          label: "版本抽数",
          data: Object.entries(卡池).map(([version]) => {
            const charRecords =
              type === "光锥" ? [] : (角色[version as keyof typeof 角色] ?? []);
            const lcRecords =
              type === "角色" ? [] : (光锥[version as keyof typeof 光锥] ?? []);
            let count = 0;
            for (const record of [...charRecords, ...lcRecords])
              count += record.pulls;
            return { x: version, y: count };
          }),
          borderColor: getThemeColor("--color-blue"),
        },
        {
          label: "版本金数",
          data: Object.entries(卡池).map(([version]) => {
            const charRecords =
              type === "光锥" ? [] : (角色[version as keyof typeof 角色] ?? []);
            const lcRecords =
              type === "角色" ? [] : (光锥[version as keyof typeof 光锥] ?? []);
            return { x: version, y: charRecords.length + lcRecords.length };
          }),
          borderColor: getThemeColor("--color-red"),
          yAxisID: "y1",
        },
        {
          label: "版本限定金数",
          data: Object.entries(卡池).map(([version]) => {
            const charRecords =
              type === "光锥" ? [] : (角色[version as keyof typeof 角色] ?? []);
            const lcRecords =
              type === "角色" ? [] : (光锥[version as keyof typeof 光锥] ?? []);
            return {
              x: version,
              y:
                charRecords.filter((x) => !x.offBanner).length +
                lcRecords.filter((x) => !x.offBanner).length,
            };
          }),
          borderColor: getThemeColor("--color-yellow"),
          yAxisID: "y1",
        },
      ],
    };
  }

  const options3: ChartOptions<"line"> = {
    animation: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          title(context) {
            return `${context[0]!.label}: ${卡池[context[0]!.label as keyof typeof 卡池]!.join("/")}`;
          },
          label(context) {
            console.log(context);
            return `${context.dataset.label!}: ${context.parsed.y!}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "版本",
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "抽数",
        },
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y1: {
        position: "right" as const,
        title: {
          display: true,
          text: "金数",
        },
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <Heading level={3}>五星数 & 总抽数</Heading>
      <Tabs>
        <Tabs.Item label="角色池">
          <div className={styles.graphContainer}>
            <Line data={getData1(charStats)} options={options1} />
          </div>
        </Tabs.Item>
        <Tabs.Item label="光锥池">
          <div className={styles.graphContainer}>
            <Line data={getData1(lcStats)} options={options1} />
          </div>
        </Tabs.Item>
        <Tabs.Item label="综合">
          <div className={styles.graphContainer}>
            <Line data={getData1(combinedStats)} options={options1} />
          </div>
        </Tabs.Item>
      </Tabs>
      <Heading level={3}>平均抽数 & 限定抽数 & 不歪率</Heading>
      <Tabs>
        <Tabs.Item label="角色池">
          <div className={styles.graphContainer}>
            <Line data={getData2(charStats)} options={options2} />
          </div>
        </Tabs.Item>
        <Tabs.Item label="光锥池">
          <div className={styles.graphContainer}>
            <Line data={getData2(lcStats)} options={options2} />
          </div>
        </Tabs.Item>
        <Tabs.Item label="综合">
          <div className={styles.graphContainer}>
            <Line data={getData2(combinedStats)} options={options2} />
          </div>
        </Tabs.Item>
      </Tabs>
      <Heading level={3}>各版本抽数</Heading>
      <Tabs>
        <Tabs.Item label="角色池">
          <div className={styles.graphContainer}>
            <Line data={getData3("角色")} options={options3} />
          </div>
        </Tabs.Item>
        <Tabs.Item label="光锥池">
          <div className={styles.graphContainer}>
            <Line data={getData3("光锥")} options={options3} />
          </div>
        </Tabs.Item>
        <Tabs.Item label="综合">
          <div className={styles.graphContainer}>
            <Line data={getData3("综合")} options={options3} />
          </div>
        </Tabs.Item>
      </Tabs>
    </>
  );
}

function CharsGraph(): ReactNode {
  const charToPulls = new Map<string, number>();
  const charLCToPulls = new Map<string, number>();
  const charEidolons = new Map<string, number>();
  const lcSuperimposes = new Map<string, number>();
  const lcToChar = new Map<string, string>();
  for (const [char, lc] of Object.entries(专武)) lcToChar.set(lc, char);
  const labels = new Set<string>();
  for (const version of Object.keys(卡池)) {
    const charRecords = 角色[version as keyof typeof 角色] ?? [];
    const lcRecords = 光锥[version as keyof typeof 光锥] ?? [];
    // Note: on purpose, we restart from 0 for each banner
    // If I got an off banner in version X, that shouldn't count as
    // my investment towards version Y
    let charPullCount = 0;
    let lcPullCount = 0;
    for (const record of charRecords) {
      charPullCount += record.pulls;
      if (!record.offBanner) {
        labels.add(record.name);
        charToPulls.set(
          record.name,
          (charToPulls.get(record.name) ?? 0) + charPullCount,
        );
        charEidolons.set(
          record.name,
          (charEidolons.get(record.name) ?? -1) + 1,
        );
        charPullCount = 0;
      }
    }
    for (const record of lcRecords) {
      lcPullCount += record.pulls;
      if (!record.offBanner) {
        const char = lcToChar.get(record.name)!;
        labels.add(char);
        charLCToPulls.set(char, (charLCToPulls.get(char) ?? 0) + lcPullCount);
        lcSuperimposes.set(char, (lcSuperimposes.get(char) ?? 0) + 1);
        lcPullCount = 0;
      }
    }
  }
  const data: ChartData<"bar", number[], string> = {
    labels: Array.from(labels).map(
      (l) =>
        `${l} (${charEidolons.get(l) ?? -1}+${lcSuperimposes.get(l) ?? 0})`,
    ),
    datasets: [
      {
        label: "角色抽数",
        data: Array.from(labels).map((label) => charToPulls.get(label) ?? 0),
        backgroundColor: getThemeColor("--color-blue"),
      },
      {
        label: "专武抽数",
        data: Array.from(labels).map((label) => charLCToPulls.get(label) ?? 0),
        backgroundColor: getThemeColor("--color-red"),
      },
    ],
  };
  const options: ChartOptions<"bar"> = {
    animation: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    indexAxis: "y",
    scales: {
      x: {
        title: {
          display: true,
          text: "抽数",
        },
        grid: {
          display: false,
        },
        stacked: true,
      },
      y: {
        title: {
          display: true,
          text: "角色",
        },
        ticks: {
          autoSkip: false,
        },
        beginAtZero: true,
        grid: {
          display: false,
        },
        stacked: true,
      },
    },
  };
  return (
    <div className={styles.graphContainer}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default function PullsPage(): ReactNode {
  const eidolons = new Map<string, number>();
  let isCharGuaranteed = false;
  let isLCGuaranteed = false;
  function mapWithEidolons<T extends PullRecordData, U>(
    records: T[],
    cb: (record: T, isGuaranteed: boolean) => U,
  ): U[] {
    return records.map((record) => {
      const isChar = record.name in 专武;
      if (!eidolons.has(record.name)) eidolons.set(record.name, isChar ? 0 : 1);
      else eidolons.set(record.name, eidolons.get(record.name)! + 1);
      const curGuaranteed = isChar ? isCharGuaranteed : isLCGuaranteed;
      if (isChar) isCharGuaranteed = record.offBanner;
      else isLCGuaranteed = record.offBanner;
      return cb(record, curGuaranteed);
    });
  }
  return (
    <>
      <h1>崩坏：星穹铁道抽卡记录</h1>
      <Heading level={2}>限定池</Heading>
      <table>
        <thead>
          <tr>
            <th>版本</th>
            <th>角色</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(卡池).map(([version, chars]) => {
            const charRecords = 角色[version as keyof typeof 角色] ?? [];
            const lcRecords = 光锥[version as keyof typeof 光锥] ?? [];
            return (
              <tr key={version}>
                <td>
                  {version}
                  <br />
                  {chars.map((char) => (
                    <CharImg
                      key={char}
                      name={char}
                      gray={!charRecords.some((r) => r.name === char)}
                    />
                  ))}
                  <br />
                  {chars.map((char) => {
                    const name = 专武[char as keyof typeof 专武]!;
                    return (
                      <CharImg
                        key={name}
                        name={name}
                        gray={!lcRecords.some((r) => r.name === name)}
                      />
                    );
                  })}
                </td>
                <td>
                  <span className={styles.pullBars}>
                    {mapWithEidolons(
                      [...charRecords, ...lcRecords],
                      (record, isGuaranteed) => (
                        <span
                          className={styles.pullBarContainer}
                          key={`${record.name}-${eidolons.get(record.name)!}`}>
                          <CharImg
                            style={{
                              margin: `0 ${record.pulls * 0.75 - 22}px`,
                            }}
                            name={record.name}
                            eidolon={eidolons.get(record.name)!}
                          />
                          <span
                            style={{ width: `${record.pulls * 1.5}px` }}
                            className={clsx(
                              styles.pullBar,
                              record.offBanner && styles.offBanner,
                              isGuaranteed && styles.guaranteed,
                            )}>
                            {record.pulls}
                          </span>
                        </span>
                      ),
                    )}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Heading level={2}>常驻池</Heading>
      <div className={styles.pullBars}>
        {mapWithEidolons(常驻, (record) => (
          <span
            className={styles.pullBarContainer}
            key={`${record.name}-${eidolons.get(record.name)!}`}>
            <CharImg
              style={{ margin: `0 ${record.pulls * 0.75 - 22}px` }}
              name={record.name}
              eidolon={eidolons.get(record.name)!}
            />
            <span
              style={{ width: `${record.pulls * 1.5}px` }}
              className={clsx(
                styles.pullBar,
                record.offBanner && styles.offBanner,
              )}>
              {record.pulls}
            </span>
          </span>
        ))}
      </div>
      <Heading level={2}>赠送 & 兑换</Heading>
      <div className={clsx(styles.pullBars, styles.gap)}>
        {mapWithEidolons(赠送, (record) => (
          <span
            className={styles.pullBarContainer}
            key={`${record.name}-${eidolons.get(record.name)!}`}>
            <CharImg name={record.name} eidolon={eidolons.get(record.name)!} />
            <span>{record.note}</span>
          </span>
        ))}
      </div>
      <Heading level={2}>趋势（仅限定池）</Heading>
      <StatsGraph />
      <Heading level={2}>角色/光锥统计</Heading>
      <CharsGraph />
    </>
  );
}

export const meta = {
  title: "崩坏：星穹铁道抽卡记录",
  description: "我在崩坏：星穹铁道的抽卡记录，五星数统计，不歪率和平均抽数统计",
};
