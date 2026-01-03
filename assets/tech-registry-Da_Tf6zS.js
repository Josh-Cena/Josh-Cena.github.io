import{u as i,j as n}from"./index-BotQl65z.js";const c={description:"A registry of the technologies I use and how to update each one.",title:"My tech registry"};function s(l){const e={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...i(),...l.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"My tech registry"}),`
`,n.jsx(e.p,{children:"This registry lists every single technology I have installed globally, so I can easily reproduce my environment and keep everything up to date."}),`
`,n.jsx(e.p,{children:"Development tools:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Homebrew: ",n.jsx(e.code,{children:"/opt/homebrew/bin/brew"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://brew.sh/",children:"Installation"}),": ",n.jsx(e.code,{children:'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'})]}),`
`,n.jsxs(e.li,{children:["Environment config: ",n.jsx(e.code,{children:'eval "$(/opt/homebrew/bin/brew shellenv)"'})]}),`
`,n.jsxs(e.li,{children:["Update: ",n.jsx(e.code,{children:"brew update && brew upgrade && brew cleanup"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Bash: ",n.jsx(e.code,{children:"/opt/homebrew/bin/bash"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Installation: ",n.jsx(e.code,{children:"brew install bash"})]}),`
`,n.jsxs(e.li,{children:["Update: ",n.jsx(e.code,{children:"brew upgrade bash"})]}),`
`,n.jsxs(e.li,{children:["Shell config: Change shell with ",n.jsx(e.code,{children:"chsh -s /opt/homebrew/bin/bash"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Git: ",n.jsx(e.code,{children:"/opt/homebrew/bin/git"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Installation: ",n.jsx(e.code,{children:"brew install git"})]}),`
`,n.jsxs(e.li,{children:["Update: ",n.jsx(e.code,{children:"brew upgrade git"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["GitHub CLI: ",n.jsx(e.code,{children:"/opt/homebrew/bin/gh"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Installation: ",n.jsx(e.code,{children:"brew install gh"})]}),`
`,n.jsxs(e.li,{children:["Update: ",n.jsx(e.code,{children:"brew upgrade gh"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["VS Code:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://code.visualstudio.com/Download",children:"Installation"}),": .zip install to ",n.jsx(e.code,{children:"/Applications/Visual Studio Code.app/Contents/Resources/app/bin"})]}),`
`,n.jsxs(e.li,{children:["Commands: ",n.jsx(e.code,{children:"code"})]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.p,{children:"Language tools:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["C/C++:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"TODO"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Haskell:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["GHCup: ",n.jsx(e.code,{children:"~/.ghcup/bin/ghcup"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://www.haskell.org/ghcup/install/",children:"Installation"}),": ",n.jsx(e.code,{children:"curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | sh"})]}),`
`,n.jsxs(e.li,{children:["Update: ",n.jsx(e.code,{children:"ghcup upgrade"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["GHC/Stack/HLS/...: ",n.jsx(e.code,{children:"~/.ghcup/bin/*"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Installation: ",n.jsx(e.code,{children:"ghcup install <tool> <version>"}),", ",n.jsx(e.code,{children:"ghcup set <tool> <version>"})]}),`
`,n.jsxs(e.li,{children:["List installed tooling versions: ",n.jsx(e.code,{children:"ghcup list"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Haskell executables: ",n.jsx(e.code,{children:"~/.stack/bin/*"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Configuration: ",n.jsx(e.code,{children:"~/.stack/config.yaml"})]}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"happy"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"alex"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["JavaScript/TypeScript:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Bun: ",n.jsx(e.code,{children:"~/.bun/bin/bun"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://bun.com/get",children:"Installation"}),": ",n.jsx(e.code,{children:"curl -fsSL https://bun.sh/install | bash"})]}),`
`,n.jsxs(e.li,{children:["Update: ",n.jsx(e.code,{children:"bun upgrade"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["NVM:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://github.com/nvm-sh/nvm",children:"Installation"}),": ",n.jsx(e.code,{children:"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash"})]}),`
`,n.jsxs(e.li,{children:["Environment config: See ",n.jsx(e.a,{href:"https://github.com/nvm-sh/nvm?tab=readme-ov-file#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file",children:"README"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Node/npm: ",n.jsx(e.code,{children:"~/.nvm/versions/node/v<version>/bin/node"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Installation: ",n.jsx(e.code,{children:"nvm install <version>"}),"; ",n.jsx(e.code,{children:"nvm use <version>"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["npm executables: ",n.jsx(e.code,{children:"~/.bun/bin/*"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["List installed: ",n.jsx(e.code,{children:"bun pm ls -g"})]}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"eshost"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"esvu"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"mmdc"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"pnpm"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"prettier"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"pyright"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"serve"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"yarn"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Julia:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"TODO"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["LaTeX:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["TeX Live: ",n.jsx(e.code,{children:"/usr/local/texlive/2025/bin/universal-darwin/*"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://www.tug.org/texlive/acquire-netinstall.html",children:"Installation"}),": follow instructions"]}),`
`,n.jsx(e.li,{children:"Update: reinstall"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Lean:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["elan: ",n.jsx(e.code,{children:"~/.elan/bin/elan"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://github.com/leanprover/elan",children:"Installation"}),": ",n.jsx(e.code,{children:"curl https://elan.lean-lang.org/elan-init.sh -sSf | sh"})]}),`
`,n.jsxs(e.li,{children:["Update: ",n.jsx(e.code,{children:"elan self update"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Lean: ",n.jsx(e.code,{children:"~/.elan/bin/lean*"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Installation: ",n.jsx(e.code,{children:"elan install <version>"}),"; ",n.jsx(e.code,{children:"elan default <version>"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["OCaml:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["OPAM: ",n.jsx(e.code,{children:"/opt/homebrew/bin/opam"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://ocaml.org/docs/installing-ocaml",children:"Installation"}),": ",n.jsx(e.code,{children:"brew install opam"})]}),`
`,n.jsxs(e.li,{children:["Update: ",n.jsx(e.code,{children:"brew upgrade opam"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["OCaml: ",n.jsx(e.code,{children:"~/.opam/<version>/bin/ocaml*"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://ocaml.org/docs/installing-ocaml",children:"Installation"}),": ",n.jsx(e.code,{children:"opam switch create <version>"})]}),`
`,n.jsxs(e.li,{children:["Environment config: ",n.jsx(e.code,{children:"eval $(opam env)"})]}),`
`,n.jsxs(e.li,{children:["Update: ",n.jsx(e.code,{children:"opam update && opam upgrade"})]}),`
`,n.jsxs(e.li,{children:["List installed versions: ",n.jsx(e.code,{children:"opam list"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["OPAM executables: ",n.jsx(e.code,{children:"~/.opam/<version>/bin/*"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"rocq-prover"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"vsrocq-language-server"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Perl:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["perlbrew: ",n.jsx(e.code,{children:"~/perl5/perlbrew/bin/perlbrew"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://perlbrew.pl/",children:"Installation"}),": ",n.jsx(e.code,{children:"curl -L https://install.perlbrew.pl | bash"})]}),`
`,n.jsxs(e.li,{children:["Update: ",n.jsx(e.code,{children:"perlbrew self-upgrade"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Perl: ",n.jsx(e.code,{children:"~/perl5/perlbrew/perls/<version>/bin/*"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://perlbrew.pl/",children:"Installation"}),": ",n.jsx(e.code,{children:"perlbrew install <version>"}),"; ",n.jsx(e.code,{children:"perlbrew switch <version>"})]}),`
`,n.jsxs(e.li,{children:["Environment config: ",n.jsx(e.code,{children:'. "$HOME/perl5/perlbrew/etc/bashrc"'})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Python:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["uv: ",n.jsx(e.code,{children:"/opt/homebrew/bin/uv"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://docs.astral.sh/uv/getting-started/installation/",children:"Installation"}),": ",n.jsx(e.code,{children:"brew install uv"})]}),`
`,n.jsxs(e.li,{children:["Update: ",n.jsx(e.code,{children:"brew upgrade uv"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Python: ",n.jsx(e.code,{children:"~/.venv/bin/python"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Installation: First run ",n.jsx(e.code,{children:"uv python install <version>"}),"; then use ",n.jsx(e.code,{children:"uv venv .venv"})," at user root"]}),`
`,n.jsxs(e.li,{children:["Update: ",n.jsx(e.code,{children:"uv python update <version>"}),"; then recreate venv with ",n.jsx(e.code,{children:"uv venv .venv --force"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Python executables: ",n.jsx(e.code,{children:"~/.venv/bin/*"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["R:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://lib.stat.cmu.edu/R/CRAN/",children:"Installation"}),": .pkg install to ",n.jsx(e.code,{children:"/Applications/R.app"}),", ",n.jsx(e.code,{children:"/Library/Frameworks/R.framework/Resources/bin"})]}),`
`,n.jsxs(e.li,{children:["Commands: ",n.jsx(e.code,{children:"R"}),", ",n.jsx(e.code,{children:"Rscript"})]}),`
`,n.jsx(e.li,{children:"Update: Download latest version and install over existing installation."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Ruby:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["rbenv: ",n.jsx(e.code,{children:"/opt/homebrew/bin/rbenv"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://github.com/rbenv/rbenv",children:"Installation"}),": ",n.jsx(e.code,{children:"brew install rbenv"})]}),`
`,n.jsxs(e.li,{children:["Update: ",n.jsx(e.code,{children:"brew upgrade rbenv"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Ruby/GEM: ",n.jsx(e.code,{children:"~/.rbenv/shims/ruby"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://www.ruby-lang.org/en/documentation/installation/#rbenv",children:"Installation"}),": ",n.jsx(e.code,{children:"rbenv install <version>"}),"; ",n.jsx(e.code,{children:"rbenv global <version>"})]}),`
`,n.jsxs(e.li,{children:["Environment config: ",n.jsx(e.code,{children:'eval "$(rbenv init - bash)"'})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Ruby executables: ",n.jsx(e.code,{children:"~/.rbenv/shims/*"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"github-linguist"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Rust:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["rustup: ",n.jsx(e.code,{children:"~/.cargo/bin/rustup"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://doc.rust-lang.org/book/ch01-01-installation.html",children:"Installation"}),": ",n.jsx(e.code,{children:"curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh"})]}),`
`,n.jsxs(e.li,{children:["Update: ",n.jsx(e.code,{children:"rustup self update"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Rust/Cargo: ",n.jsx(e.code,{children:"~/.cargo/bin/*"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://rustup.rs/",children:"Installation"}),": ",n.jsx(e.code,{children:"rustup install <version>"}),"; ",n.jsx(e.code,{children:"rustup default <version>"})]}),`
`,n.jsxs(e.li,{children:["Update: ",n.jsx(e.code,{children:"rustup update"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]})]})}function d(l={}){const{wrapper:e}={...i(),...l.components};return e?n.jsx(e,{...l,children:n.jsx(s,{...l})}):s(l)}export{d as default,c as frontMatter};
