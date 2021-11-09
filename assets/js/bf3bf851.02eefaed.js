"use strict";(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[9118],{3598:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),s=["components"],l={title:"Running a Laravel app",authors:"joshcena",tags:["back end"]},i=void 0,p={permalink:"/blog/2021/03/25/laravel",source:"@site/blog/2021-03-25-laravel.mdx",title:"Running a Laravel app",description:"Recently I came upon a Laravel project: SAM, the legacy system of our club. As an absolute newcomer in backend, I had zero idea how I should start the app.",date:"2021-03-25T00:00:00.000Z",formattedDate:"March 25, 2021",tags:[{label:"back end",permalink:"/blog/tags/back-end"}],readingTime:3,truncated:!0,authors:[{name:"Joshua Chen",url:"https://github.com/Josh-Cena",imageURL:"https://github.com/Josh-Cena.png",key:"joshcena"}],prevItem:{title:"A thousand words with Zhi",permalink:"/blog/2021/04/01/zhi"},nextItem:{title:"Choosing a color palette",permalink:"/blog/2021/03/15/color"}},c={authorsImageUrls:[void 0]},u=[{value:"Install dependencies",id:"install-dependencies",children:[],level:2},{value:"Configure environment",id:"configure-environment",children:[],level:2},{value:"Configure database",id:"configure-database",children:[],level:2},{value:"Start service",id:"start-service",children:[],level:2}],h={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Recently I came upon a Laravel project: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Computerization/sam"},"SAM"),", the legacy system of our club. As an absolute newcomer in backend, I had zero idea how I should start the app."),(0,o.kt)("p",null,"The first thing I tried was running the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.php")," file, which just printed out the HTML file in the console. Definitely not working\u2014it's analogous to opening the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file of a Vue app. You have to actually start an HTTPS service on the localhost."),(0,o.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,o.kt)("p",null,"Recall how a Vue app is run with yarn."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn install\n$ yarn serve\n")),(0,o.kt)("p",null,"Well, in Laravel, things are quite similar. The package manager used is ",(0,o.kt)("strong",{parentName:"p"},"composer"),", and I installed it globally following instructions ",(0,o.kt)("a",{parentName:"p",href:"https://getcomposer.org/doc/00-intro.md#globally"},"here"),". We install the dependencies declared in ",(0,o.kt)("inlineCode",{parentName:"p"},"composer.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ composer --version\nComposer version 1.10.13 2020-09-09 11:46:34\n$ composer install\n")),(0,o.kt)("h2",{id:"configure-environment"},"Configure environment"),(0,o.kt)("p",null,"Next, we have to declare the environment. This is the first nuance between a front end project and a back end project. Because the Vue app is run in a browser, you don't worry so much about communicating with the outside. (You are in a sandbox anyways and you access everything through URLs.) But in the back end, the app has to reach out to the server, to the data base, and to all kinds of resources. For the sake of this project, we will configure the app environment and the database connection."),(0,o.kt)("p",null,"Laravel comes with a sample environment file ",(0,o.kt)("inlineCode",{parentName:"p"},".env.example"),". Duplicate it and rename it ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),". Then change the first two blocks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title=".env" {1}',title:'".env"',"{1}":!0},"APP_NAME=sam\nAPP_ENV=local\nAPP_KEY=\nAPP_DEBUG=true\nAPP_LOG_LEVEL=debug\nAPP_URL=http://localhost\n")),(0,o.kt)("p",null,"The field left empty in the environment is ",(0,o.kt)("inlineCode",{parentName:"p"},"APP_KEY"),", which is used for encrypted services. Generate one using artisan."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ php artisan key:generate\nApplication key [base64:yPl2zp1+ZCZ1/7TK8QEM1uQTzOetXp8pl+/bTnbLAuw=] set successfully.\n")),(0,o.kt)("h2",{id:"configure-database"},"Configure database"),(0,o.kt)("p",null,"We move to the database part."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title=".env" {4-6}',title:'".env"',"{4-6}":!0},"DB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=sam\nDB_USERNAME=root\nDB_PASSWORD=[the root password]\n")),(0,o.kt)("p",null,"I know that in production I'd better not use ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," to manage the database for security concerns, but it's development anyways, so I chose the easier path. Now, login to MySQL and create a database."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mysql -u root -p\nEnter password:\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 38\nServer version: 8.0.23 Homebrew\n\nCopyright (c) 2000, 2021, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> CREATE DATABASE sam;\nQuery OK, 1 row affected (0.01 sec)\n\nmysql> quit;\nBye\n")),(0,o.kt)("p",null,"The tables can be automatically generated using"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ php artisan migrate\nMigration table created successfully.\nMigrating: 2014_10_12_000000_create_users_table\nMigrated:  2014_10_12_000000_create_users_table\n...\n")),(0,o.kt)("h2",{id:"start-service"},"Start service"),(0,o.kt)("p",null,"Lastly, start the PHP service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ php artisan serve\n")))}d.isMDXComponent=!0}}]);