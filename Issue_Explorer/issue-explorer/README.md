# issue-explorer

Bonus Features Implmented:
- Smooth transistion from home page to issue page with animation
- Cover the case of an error fetching the results
  - Case 1: Invalid repo/Repo not found
  - Case 2: No issues in the repo
- Allow users to be able to share states via URLs to other users so that they can view results without searching!
- Slight change to design to make it look more modern (instead of X sign, I added a home button on the nav bar)
- Labels are truncated in case it is too long. Hovering over the labels will popup tooltip that has the full name of the label
- Add link to issues/pull request on each card so users can refer to the issue on Github easily

Logic for sorting issues:
- Issues that are closed take precedence over pull request (if case is closed and there's a pr for the repo, only the closed icon will show up in the card)
- Issues that are open and has an active pull request will have a pull request icon show up on the card
- Issues that are open and has no active pull request will not have any icon on the card (to indicate it is an open case)

Note:
- I did not have time to implement pagination for the project (doing both school and work at the same time). I have done a lot of pagination in my past experiences though
- As a result I decided to only fetch the default of amount of issues from the Github API (30 issues max). If I were to implement pagination, I would have played around with the pagination parameter of the Github API and implement a server side pagination (instead of loading a large amount of data at once)



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve

Use this command to run the project on localhost
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
