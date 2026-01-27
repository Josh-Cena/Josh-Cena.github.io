import{u as i,j as e}from"./index-Plw_Q2wT.js";import"./_commonjsHelpers-Cpj98o6Y.js";const h={description:"A registry of the technologies I use and how to update each one.",title:"My tech registry"};function n(l){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"My tech registry"}),`
`,e.jsx(s.p,{children:"This registry lists every single technology I have installed globally, so I can easily reproduce my environment and keep everything up to date."}),`
`,e.jsxs(s.p,{children:["Anything that's installed by ",e.jsx(s.code,{children:"brew"})," doesn't need detailed instructions, just run ",e.jsx(s.code,{children:"brew update && brew upgrade && brew cleanup"}),"."]}),`
`,e.jsx(s.h2,{children:"Browsers"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://www.firefox.com/en-US/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white",alt:"Firefox"})})," ",e.jsx(s.a,{href:"https://www.google.com/chrome/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white",alt:"Google Chrome"})})," ",e.jsx(s.a,{href:"https://www.apple.com/safari/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/Safari-000000?style=for-the-badge&logo=Safari&logoColor=white",alt:"Safari"})})]}),`
`,e.jsx(s.h2,{children:"Development tools"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://brew.sh/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/homebrew-%23FBB040.svg?style=for-the-badge&logo=homebrew&logoColor=black",alt:"Homebrew"})})," ",e.jsx(s.code,{children:"/opt/homebrew/bin/brew"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://brew.sh/",children:"Installation"}),": ",e.jsx(s.code,{children:'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'})]}),`
`,e.jsxs(s.li,{children:["Environment config: ",e.jsx(s.code,{children:'eval "$(/opt/homebrew/bin/brew shellenv)"'})]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://www.gnu.org/software/bash/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/bash_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white",alt:"Bash Script"})})," ",e.jsx(s.code,{children:"/opt/homebrew/bin/bash"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Shell config: Change shell with ",e.jsx(s.code,{children:"chsh -s /opt/homebrew/bin/bash"})]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://git-scm.com/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",alt:"Git"})})," ",e.jsx(s.code,{children:"/opt/homebrew/bin/git"})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://code.visualstudio.com/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white",alt:"Visual Studio Code"})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://code.visualstudio.com/Download",children:"Installation"}),": .zip install"]}),`
`,e.jsxs(s.li,{children:["Commands: ",e.jsx(s.code,{children:"~/.local/bin/code"})," (custom-created symlink to ",e.jsx(s.code,{children:"/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code"}),")"]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",alt:"Docker"})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://www.gnupg.org/",children:e.jsx(s.strong,{children:"GPG"})})," ",e.jsx(s.code,{children:"/usr/local/bin/gpg"})," (symlink to ",e.jsx(s.code,{children:"/usr/local/MacGPG2/bin/gpg"}),")"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://gpgtools.org/",children:"Installation"}),": .dmg install"]}),`
`]}),`
`,e.jsx(s.h2,{children:"Language tools"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.img,{src:"https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",alt:"C"})," ",e.jsx(s.img,{src:"https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",alt:"C++"})]}),`
`,e.jsx(s.p,{children:"Thanks to Apple, my C/C++ setup is very complex."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"/usr/bin/{clang,clang++,cc,c++,gcc,g++}"}),": Apple-provided Clang"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"/opt/homebrew/{gcc,g++}-<version>"}),": Homebrew-installed GCC"]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://dafny.org/",children:e.jsx(s.strong,{children:"Dafny"})})," ",e.jsx(s.code,{children:"/opt/homebrew/bin/dafny"})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://www.haskell.org/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/Haskell-5e5086?style=for-the-badge&logo=haskell&logoColor=white",alt:"Haskell"})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.haskell.org/ghcup/",children:e.jsx(s.strong,{children:"GHCup"})})," ",e.jsx(s.code,{children:"~/.ghcup/bin/ghcup"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.haskell.org/ghcup/install/",children:"Installation"}),": ",e.jsx(s.code,{children:"curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | sh"})]}),`
`,e.jsxs(s.li,{children:["Update: ",e.jsx(s.code,{children:"ghcup upgrade"})]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.haskell.org/ghc/",children:e.jsx(s.strong,{children:"GHC"})}),"/",e.jsx(s.a,{href:"https://docs.haskellstack.org/en/stable/",children:e.jsx(s.strong,{children:"Stack"})}),"/",e.jsx(s.a,{href:"https://haskell-language-server.readthedocs.io/en/latest/",children:e.jsx(s.strong,{children:"HLS"})}),"/... ",e.jsx(s.code,{children:"~/.ghcup/bin/*"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Installation: ",e.jsx(s.code,{children:"ghcup install <tool> <version>"}),", ",e.jsx(s.code,{children:"ghcup set <tool> <version>"})]}),`
`,e.jsxs(s.li,{children:["List installed tooling versions: ",e.jsx(s.code,{children:"ghcup list"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.em,{children:"Note"}),": Prefer ",e.jsx(s.code,{children:"stack"})," over ",e.jsx(s.code,{children:"cabal"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Haskell executables: ",e.jsx(s.code,{children:"~/.stack/bin/*"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Installation/Update: ",e.jsx(s.code,{children:"stack install <package>"})]}),`
`,e.jsxs(s.li,{children:["Configuration: ",e.jsx(s.code,{children:"~/.stack/config.yaml"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"http://www.haskell.org/alex/",children:e.jsx(s.strong,{children:"Alex"})})," ",e.jsx(s.code,{children:"alex"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"http://www.haskell.org/happy/",children:e.jsx(s.strong,{children:"Happy"})})," ",e.jsx(s.code,{children:"happy"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ndmitchell/hlint",children:e.jsx(s.strong,{children:"HLint"})})," ",e.jsx(s.code,{children:"hlint"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/tweag/ormolu",children:e.jsx(s.strong,{children:"Ormolu"})})," ",e.jsx(s.code,{children:"ormolu"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.img,{src:"https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",alt:"JavaScript"})," ",e.jsx(s.a,{href:"https://www.typescriptlang.org/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",alt:"TypeScript"})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/nvm-sh/nvm",children:e.jsx(s.strong,{children:"NVM"})}),":",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating",children:"Installation"}),": ",e.jsx(s.code,{children:"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash"})]}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/nvm-sh/nvm?tab=readme-ov-file#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file",children:"Environment config"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://nodejs.org/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",alt:"NodeJS"})})," ",e.jsx(s.a,{href:"https://www.npmjs.com/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white",alt:"NPM"})})," ",e.jsx(s.code,{children:"~/.nvm/versions/node/v<version>/bin/node"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/nvm-sh/nvm?tab=readme-ov-file#usage",children:"Installation"}),": ",e.jsx(s.code,{children:"nvm install <version>"}),"; ",e.jsx(s.code,{children:"nvm use <version>"})]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://deno.com/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/deno%20js-000000?style=for-the-badge&logo=deno&logoColor=white",alt:"Deno JS"})})," ",e.jsx(s.code,{children:"/opt/homebrew/bin/deno"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://docs.deno.com/runtime/getting_started/installation/",children:"Installation"}),": ",e.jsx(s.code,{children:"curl -fsSL https://deno.land/install.sh | sh"})]}),`
`,e.jsxs(s.li,{children:["Environment config: ",e.jsx(s.code,{children:'. "$HOME/.deno/env"'})]}),`
`,e.jsxs(s.li,{children:["Update: ",e.jsx(s.code,{children:"deno upgrade"})]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://bun.com/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white",alt:"Bun"})})," ",e.jsx(s.code,{children:"~/.bun/bin/bun"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://bun.com/get",children:"Installation"}),": ",e.jsx(s.code,{children:"curl -fsSL https://bun.sh/install | bash"})]}),`
`,e.jsxs(s.li,{children:["Update: ",e.jsx(s.code,{children:"bun upgrade"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.em,{children:"Note"}),": Prefer ",e.jsx(s.code,{children:"bun"})," over ",e.jsx(s.code,{children:"npm"}),"/",e.jsx(s.code,{children:"yarn"}),"/",e.jsx(s.code,{children:"pnpm"})," where possible. Prefer ",e.jsx(s.code,{children:"pnpm"})," over ",e.jsx(s.code,{children:"npm"}),"/",e.jsx(s.code,{children:"yarn"})," for Node projects."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["npm executables: ",e.jsx(s.code,{children:"~/.bun/bin/*"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["List installed: ",e.jsx(s.code,{children:"bun pm ls -g"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/bterlson/eshost-cli",children:e.jsx(s.strong,{children:"eshost-cli"})})," ",e.jsx(s.code,{children:"eshost"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/devsnek/esvu",children:e.jsx(s.strong,{children:"esvu"})})," ",e.jsx(s.code,{children:"esvu"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/mermaid-js/mermaid-cli",children:e.jsx(s.strong,{children:"Mermaid CLI"})})," ",e.jsx(s.code,{children:"mmdc"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://pnpm.io/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220",alt:"PNPM"})})," ",e.jsx(s.code,{children:"pnpm"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://prettier.io/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/prettier-%23192a32?style=for-the-badge&logo=prettier&logoColor=dc524a",alt:"Prettier"})})," ",e.jsx(s.code,{children:"prettier"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://microsoft.github.io/pyright/#/",children:e.jsx(s.strong,{children:"Pyright"})})," ",e.jsx(s.code,{children:"pyright"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/vercel/serve",children:e.jsx(s.strong,{children:"serve"})})," ",e.jsx(s.code,{children:"serve"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://yarnpkg.com/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white",alt:"Yarn"})})," ",e.jsx(s.code,{children:"yarn"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://julialang.org/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/-Julia-9558B2?style=for-the-badge&logo=julia&logoColor=white",alt:"Julia"})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/JuliaLang/juliaup",children:e.jsx(s.strong,{children:"juliaup"})})," ",e.jsx(s.code,{children:"~/.juliaup/bin/juliaup"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://docs.julialang.org/en/v1/manual/installation/",children:"Installation"}),": ",e.jsx(s.code,{children:"curl -fsSL https://install.julialang.org | sh"})]}),`
`,e.jsxs(s.li,{children:["Update: ",e.jsx(s.code,{children:"juliaup self update"})]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Julia"})," ",e.jsx(s.code,{children:"~/.juliaup/bin/julia"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Installation: ",e.jsx(s.code,{children:"juliaup add <version>"}),"; ",e.jsx(s.code,{children:"juliaup default <version>"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white",alt:"LaTeX"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.tug.org/texlive/",children:e.jsx(s.strong,{children:"TeX Live"})})," ",e.jsx(s.code,{children:"/usr/local/texlive/2025/bin/universal-darwin/*"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.tug.org/texlive/acquire-netinstall.html",children:"Installation"}),": follow instructions"]}),`
`,e.jsx(s.li,{children:"Update: reinstall"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://lean-lang.org/",children:e.jsx(s.strong,{children:"Lean"})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"elan"})," ",e.jsx(s.code,{children:"~/.elan/bin/elan"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://lean-lang.org/install/manual/",children:"Installation"}),": ",e.jsx(s.code,{children:"curl https://elan.lean-lang.org/elan-init.sh -sSf | sh"})]}),`
`,e.jsxs(s.li,{children:["Update: ",e.jsx(s.code,{children:"elan self update"})]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Lean"})," ",e.jsx(s.code,{children:"~/.elan/bin/lean*"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Installation: ",e.jsx(s.code,{children:"elan install <version>"}),"; ",e.jsx(s.code,{children:"elan default <version>"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://racket-lang.org/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/Racket-%239F1D20.svg?style=for-the-badge&logo=racket&logoColor=white",alt:"Racket"})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://download.racket-lang.org/",children:"Installation"}),": .dmg install"]}),`
`,e.jsxs(s.li,{children:["Commands: ",e.jsx(s.code,{children:"/Applications/Racket v<version>/bin/racket"})]}),`
`,e.jsx(s.li,{children:"Update: Download latest version and install over existing installation. Update PATH as well."}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://ocaml.org/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/OCaml-%23E98407.svg?style=for-the-badge&logo=ocaml&logoColor=white",alt:"OCaml"})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://opam.ocaml.org/",children:e.jsx(s.strong,{children:"OPAM"})}),": ",e.jsx(s.code,{children:"/opt/homebrew/bin/opam"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"OCaml"}),": ",e.jsx(s.code,{children:"~/.opam/<version>/bin/ocaml*"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://ocaml.org/docs/installing-ocaml",children:"Installation"}),": ",e.jsx(s.code,{children:"opam switch create <version>"})]}),`
`,e.jsxs(s.li,{children:["Environment config: ",e.jsx(s.code,{children:"eval $(opam env)"})]}),`
`,e.jsxs(s.li,{children:["Update: ",e.jsx(s.code,{children:"opam update && opam upgrade"})]}),`
`,e.jsxs(s.li,{children:["List installed versions: ",e.jsx(s.code,{children:"opam list"})]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["OPAM executables: ",e.jsx(s.code,{children:"~/.opam/<version>/bin/*"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://rocq-prover.org/",children:e.jsx(s.strong,{children:"Rocq"})})," ",e.jsx(s.code,{children:"rocq"})]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"vsrocq-language-server"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ocaml-ppx/ocamlformat",children:e.jsx(s.strong,{children:"OCamlFormat"})})," ",e.jsx(s.code,{children:"ocamlformat"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://www.perl.org/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/perl-%2339457E.svg?style=for-the-badge&logo=perl&logoColor=white",alt:"Perl"})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://perlbrew.pl/",children:e.jsx(s.strong,{children:"perlbrew"})})," ",e.jsx(s.code,{children:"~/perl5/perlbrew/bin/perlbrew"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://perlbrew.pl/",children:"Installation"}),": ",e.jsx(s.code,{children:"curl -L https://install.perlbrew.pl | bash"})]}),`
`,e.jsxs(s.li,{children:["Update: ",e.jsx(s.code,{children:"perlbrew self-upgrade"})]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Perl"})," ",e.jsx(s.code,{children:"~/perl5/perlbrew/perls/<version>/bin/*"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://perlbrew.pl/",children:"Installation"}),": ",e.jsx(s.code,{children:"perlbrew install <version>"}),"; ",e.jsx(s.code,{children:"perlbrew switch <version>"})]}),`
`,e.jsxs(s.li,{children:["Environment config: ",e.jsx(s.code,{children:'. "$HOME/perl5/perlbrew/etc/bashrc"'})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://www.python.org/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",alt:"Python"})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://docs.astral.sh/uv/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/uv-%23DE5FE9.svg?style=for-the-badge&logo=uv&logoColor=white",alt:"uv"})})," ",e.jsx(s.code,{children:"/opt/homebrew/bin/uv"})]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Python"})," ",e.jsx(s.code,{children:"~/.venv/bin/python"}),", ",e.jsx(s.code,{children:"~/.local/bin/python<version>"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Installation: First run ",e.jsx(s.code,{children:"uv python install <version>"}),"; then use ",e.jsx(s.code,{children:"uv venv .venv"})," at user root"]}),`
`,e.jsxs(s.li,{children:["Update: ",e.jsx(s.code,{children:"uv python update <version>"}),"; then recreate venv with ",e.jsx(s.code,{children:"uv venv .venv --force"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.em,{children:"Note"}),": The venv uses the Python version used to create it. You can also create other environments with other Python versions, probably in project directories, by installing additional Python versions."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Python executables: ",e.jsx(s.code,{children:"~/.venv/bin/*"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Installation: ",e.jsx(s.code,{children:"uv pip install <package>"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://black.readthedocs.io/en/stable/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/black-%23000000.svg?style=for-the-badge&logo=black&logoColor=white",alt:"Black"})})," ",e.jsx(s.code,{children:"black"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://jupyter.org/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white",alt:"Jupyter Notebook"})})," ",e.jsx(s.code,{children:"jupyterlab"})]}),`
`,e.jsx(s.li,{children:"You are free to install any package used by casual scripts, but the following should be the baseline installations:"}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://matplotlib.org/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black",alt:"Matplotlib"})})," ",e.jsx(s.code,{children:"matplotlib"})," (library)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://networkx.org/",children:e.jsx(s.strong,{children:"NetworkX"})})," ",e.jsx(s.code,{children:"networkx"})," (library)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://numpy.org/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white",alt:"NumPy"})})," ",e.jsx(s.code,{children:"numpy"})," (library)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://pandas.pydata.org/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white",alt:"Pandas"})})," ",e.jsx(s.code,{children:"pandas"})," (library)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://scikit-learn.org/stable/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white",alt:"scikit-learn"})})," ",e.jsx(s.code,{children:"scikit-learn"})," (library)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://scipy.org/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/SciPy-%230C55A5.svg?style=for-the-badge&logo=scipy&logoColor=%white",alt:"SciPy"})})," ",e.jsx(s.code,{children:"scipy"})," (library)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://seaborn.pydata.org/",children:e.jsx(s.strong,{children:"Seaborn"})})," ",e.jsx(s.code,{children:"seaborn"})," (library)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.statsmodels.org/stable/index.html",children:e.jsx(s.strong,{children:"statsmodels"})})," ",e.jsx(s.code,{children:"statsmodels"})," (library)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://tqdm.github.io/",children:e.jsx(s.strong,{children:"tqdm"})})," ",e.jsx(s.code,{children:"tqdm"})," (library)"]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://www.anaconda.com/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white",alt:"Anaconda"})})," ",e.jsx(s.code,{children:"/opt/homebrew/bin/conda"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.em,{children:"Note"}),": I don't use Anaconda. But there's one particular package, ",e.jsx(s.a,{href:"https://montreal-forced-aligner.readthedocs.io/en/latest/",children:"Montreal Forced Aligner"}),", that to this day doesn't have a functional PyPI build. I installed ",e.jsx(s.code,{children:"miniconda"})," for it, and a little shell setup:"]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`conda_init() {
if [[ $(which python) == *".venv"* ]]; then
    deactivate
fi

# >>> conda initialize >>>
# ...
# <<< conda initialize <<<

}
`})}),`
`,e.jsxs(s.p,{children:["Now I can run ",e.jsx(s.code,{children:"conda_init"})," in any shell to set up conda for that session, and then run MFA from there."]}),`
`]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://www.r-project.org/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white",alt:"R"})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://posit-dev.github.io/air/",children:e.jsx(s.strong,{children:"Air"})}),": ",e.jsx(s.code,{children:"/opt/homebrew/bin/air"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"R"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://cran.r-project.org/mirrors.html",children:"Installation"}),": .pkg install to ",e.jsx(s.code,{children:"/Applications/R.app"}),", ",e.jsx(s.code,{children:"/Library/Frameworks/R.framework/Resources/bin"})]}),`
`,e.jsxs(s.li,{children:["Commands: ",e.jsx(s.code,{children:"/usr/local/bin/R"}),", ",e.jsx(s.code,{children:"/usr/local/bin/Rscript"})," (symlinks to ",e.jsx(s.code,{children:"/Library/Frameworks/R.framework/Resources/bin"}),")"]}),`
`,e.jsx(s.li,{children:"Update: Download latest version and install over existing installation."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://www.ruby-lang.org/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white",alt:"Ruby"})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/rbenv/rbenv",children:e.jsx(s.strong,{children:"rbenv"})})," ",e.jsx(s.code,{children:"/opt/homebrew/bin/rbenv"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Ruby"})," ",e.jsx(s.code,{children:"~/.rbenv/shims/ruby"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.ruby-lang.org/en/documentation/installation/#rbenv",children:"Installation"}),": ",e.jsx(s.code,{children:"rbenv install <version>"}),"; ",e.jsx(s.code,{children:"rbenv global <version>"})]}),`
`,e.jsxs(s.li,{children:["Environment config: ",e.jsx(s.code,{children:'eval "$(rbenv init - bash)"'})]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Ruby executables: ",e.jsx(s.code,{children:"~/.rbenv/shims/*"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Installation: ",e.jsx(s.code,{children:"gem install <package>"})]}),`
`,e.jsxs(s.li,{children:["Update: ",e.jsx(s.code,{children:"gem update <package>"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/github-linguist/linguist",children:e.jsx(s.strong,{children:"Linguist"})})," ",e.jsx(s.code,{children:"github-linguist"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://rust-lang.org/",children:e.jsx(s.img,{src:"https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white",alt:"Rust"})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://rust-lang.org/tools/install",children:e.jsx(s.strong,{children:"rustup"})})," ",e.jsx(s.code,{children:"~/.cargo/bin/rustup"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://rust-lang.org/tools/install",children:"Installation"}),": ",e.jsx(s.code,{children:"curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh"})]}),`
`,e.jsxs(s.li,{children:["Update: ",e.jsx(s.code,{children:"rustup self update"})]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://doc.rust-lang.org/rustc/",children:e.jsx(s.strong,{children:"rustc"})}),"/",e.jsx(s.a,{href:"https://doc.rust-lang.org/cargo/",children:e.jsx(s.strong,{children:"Cargo"})}),": ",e.jsx(s.code,{children:"~/.cargo/bin/*"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://rustup.rs/",children:"Installation"}),": ",e.jsx(s.code,{children:"rustup install <version>"}),"; ",e.jsx(s.code,{children:"rustup default <version>"})]}),`
`,e.jsxs(s.li,{children:["Update: ",e.jsx(s.code,{children:"rustup update"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://www.wolfram.com/",children:e.jsx(s.strong,{children:"Wolfram"})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.wolfram.com/engine/",children:e.jsx(s.strong,{children:"Wolfram Engine"})})," ",e.jsx(s.code,{children:"/Applications/Wolfram Engine.app"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.wolfram.com/engine/",children:"Installation"}),": .dmg install"]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.wolfram.com/language/",children:e.jsx(s.strong,{children:"WolframScript"})}),": ",e.jsx(s.code,{children:"/Applications/WolframScript.app"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://reference.wolfram.com/language/workflow/InstallWolframScript.html",children:"Installation"}),": .dmg install"]}),`
`,e.jsxs(s.li,{children:["Commands: ",e.jsx(s.code,{children:"/usr/local/bin/wolframscript"})," (symlink to ",e.jsx(s.code,{children:"/Applications/WolframScript.app/Contents/MacOS/wolframscript"}),")"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.h2,{children:"Other command line tools"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"bench"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"coreutils"})," (GNU versions of commands, prefixed with ",e.jsx(s.code,{children:"g"}),"; e.g., ",e.jsx(s.code,{children:"gls"}),", ",e.jsx(s.code,{children:"gcp"}),")"]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"cowsay"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"curl"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"dopplerhq/cli/doppler"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"ffmpeg"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"gh"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"gnupg"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"jq"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"languagetool"}),": start with ",e.jsx(s.code,{children:"brew services start languagetool"})]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"neofetch"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pandoc"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"tree"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"wget"})}),`
`]}),`
`,e.jsx(s.p,{children:"Other libraries:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"graphviz"})," (used by ",e.jsx(s.code,{children:"networkx"}),", ",e.jsx(s.code,{children:"DiagrammeR"}),", and others)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"z3"})," (for theorem proving)"]}),`
`]})]})}function t(l={}){const{wrapper:s}={...i(),...l.components};return s?e.jsx(s,{...l,children:e.jsx(n,{...l})}):n(l)}export{t as default,h as frontMatter};
