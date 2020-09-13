# QnA

### Planning

> What do you think are the greatest areas of risk in completing the project?

- Making sure the website is scallable. The architecture of the project should be planned before starting to code.
- App should handle errors well.

> What changes/additions would you make to the design?

- If an invalid link is entered then a toast should popup in the homepage
- The issues should have a link icon where users can click/open the original issue

> List a two or three features that you would consider implementing in the future that would add significant value to the project.

- In addition to entering a repo link, user can search keywords on the home page and then choose the repo they desire (Like Google Search)
- Recommend repos that are most popular in Github (or searched on the website) for people to look into
- Login/Sign-out feature via Gmail/Facebook authentication so user can star favorite repositories and flag issues (perhaps they want to work on certain issues and contribute to open source) on their account

---

### Looking Back

> Describe the major design/build decisions and why you made them.

- I decided to code in Vue.js because that is my strongest framework (I am currently learning React at work so I will be fluent in 4 months!). I debated if I wanted to use Vuex state management but I decided not to because the project is simple and it would take more work to setup Vuex than utilizing it. 

- For design purposes, I used Vuetify, a material design framework to help me with the css and styling. I think it is the correct choice because it saved me a lot of time building components from scratch (such as cards, serach bards etc...)

- I had to carefully plan out my components in order to use routing. I decided to pass the github link as a prop from the home page to the display issue page so that I am able to allow user to share states via URL. I was thinking about this before starting the project so it made the bonus task really easy to implment after the structures are set up.

- I decided to make one API call (maximum of 30 issues) to pull all the issues and kept it in a state for me to filter afterwards. That means the website only has to load once for each repo instead of recalling apis evertime a filter is clicked. Since I do not have time for pagination, I purposesly not pull all the issues incase there are thousands of cases in a repo and it would take a while to fetch all those reposnses. If I were to implement pagination, I would display only a certain amount of issues in one page and do a server-side pagination.

- Instead of the X button on the display issue page, I used a home button icon on the navbar for users to go back to home page (for me it looks cleaner than the mock up) 

- Bonus features I implmented:
  1. Animation, link to repo on each issue
  2. Covered the case when repo is not found or there is no issue in a repo
  3. Allow users to be share states via URLs
  4. Shorten the labels if it is too long (can view the entire text by hovering over it)

> How long did the assignment take (in hours)? Please break down your answer into buckets (e.g. "Learning Framework", "Coding", "Debugging").

- It took me around 6 hours to deliver the final product
  - 1h spent on reviewing Vue, architecting, and setting up the project
  - 3.5h Coding, implementing features, learning how to use Github API
  - 1h Debugging + CSS + Making website responsive to laptops, ipads, and iphones
  - .5h typing this document + reflection

> If you could go back and give yourself advice at the beginning of the project, what would it be?

- Review flexbox! That would save me a lot of time making the website responsive. 
- I was happy that I planned and scaled my project before I started. This made coding the components really easy.

> Did you learn anything new?
- I learned how to use <v-layout row wrap> and <v-flex> together to display items in a grid format
- Github's API is pretty cool!
- I learned how to truncate a sentence if it is too long 
- A lot of refresher on fullstack development 
- This was like a mini-hackathon to me!

> Do you feel that this assignment allowed you to showcase your abilities effectively?

- Yes, I felt that I was able to showcase my knowledge of fullstack developement in terms of architcture and code. I was able to apply many things I learned from work/school into this project.

> Are there any significant web development-related skills that you possess that were not demonstrated in this exercise? If so, what are they?

- I have done a lot of server-side pagination in the past! Also have worked with more complicated components and customized components in the past 
- I have also worked on authentication and assigning roles (admin, etc...), permission to users
- I am fluent in SQL, which means I can create, update, delete table in a fullstack project
