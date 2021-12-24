# Council Emissions Calculator
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
An experiment to test the initial design of Civic Maker's 2021 Council Emissions Calculator project.

---


![GitHub pull requests](https://img.shields.io/github/issues-pr/CodeforAustralia/council-emissions-calculator.svg)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/CodeforAustralia/council-emissions-calculator.svg)

- [Project goals](#Project-Goals)
- [Getting started](#Getting-Started)
- [Learn More about Development](#Learn-More-about-Development)
- [Collaboration Working In a Forked Repository](#Collaboration-Working-In-a-Forked-Repository)

---

# Project Goals

- Provide councils a tool to assess their impact on the environment.
- Provide councils with inspirations and next steps to have a more sustainable way of working.
- Provide councils with inspirations and next steps to engage communities in initiatives that are favorable for the environment.
- Provide a source of information that facilitates the decision process for councils to become more sustainable.
- to learn more about this project, check out our project [planning](https://docs.google.com/document/d/1h5r1AfbQC8Azy_cdGHGBGOJwSxSqvt0cHKd5MmSd7qo/edit#heading=h.fw4lq2wclkt9) and [trello project board](https://trello.com/b/ZXaIkclp/civic-makers-2021-l-use-this-one).

---

## Getting Started

<details>
<summary> First, install dependencies using your preferred package manager: </summary>

```
npm install
# or
yarn install
```

Next, run the development server:

```
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

---
     
</details>

## Learn More about Development
<details>
<summary> 
To learn more about Next.js, take a look at the following resources:
</summary> 
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
</details>
---

## Dependencies used in this project
<details>
<summary> </summary>
- Google Sheets as database
- Google sheets to process form responses and calculate emissions
- Chakra for UI framework
- Highcharts to build charts in report
- Vercel as hosting platform
</details>

---

## Collaboration: Working In a Forked Repository

### How to fetch upstream main/master

There are 2 options :

#### Option 1 : Using terminal
<details>
<summary> 
STEPS
</summary>
1. Checkout to main branch
2. `git branch` view list to confirm
3. `git remote add upstream (URL- copy the URL from Code for Australia CodeforAustralia/council-emissions-calculator-spike git hub)`

- Upstream is the name for the master git repo it can be reasonable any name.

4. `git fetch upstream`
5. `git merge upstream/main`
6. `git pull`
</details>

#### Option 2 : Using button in your main forked repo

     (located above the code listing right top)

<details>
<summary> 
STEPS
</summary>

1. Click on `fetch upstream` button
2. Select `Fetch and merge` button
3. `git pull` at the local main branch

- Resolve any conflicts

4. `git status`
5. `git add .` or `git add (file/path name)`
6. `git commit -m “note”`
</details>

### To merge the changes to working branch
<details>
<summary> 
STEPS
</summary> 
     
1. `git checkout (branch name)`
2. `git merge main`
</details>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://blog.codeforaustralia.org"><img src="https://avatars.githubusercontent.com/u/31912?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matt Sawkill</b></sub></a><br /><a href="https://github.com/russelljjarvis/council-emissions-calculator/commits?author=sawks" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!