https://github.com/Apostle01/I-Three.git: This is a previous work that has a lot of commits but had to create a new repository (Milestone01) due to technical issues.
https://github.com/Apostle01/Milestone01.git
https://apostle01.github.io/Milestone01/
# Milestone01

My Milestone 1 Project
This is a website of a Dreadlocks saloon called I-Three. 
 We specialise in dreadlocks and natural hair care. Visitor have the opportunity to book.

 ![Milestone01. Screenshots of website](assets/img/am-i-responsive.png)

 [View Milestone01 on Github Pages](https://apostle01.github.io/Milestone01/)

 ![Github last commit(by committer)](html file for clarity on what we offer
)
![Github last commit(by committer)](updated README.md file with previous repository to show other commits, current repository and website url)

## CONTENTS

-[User Experience (UX)](#User-Experience-UX)

    -[User Stories](#User Stories)

-[Design](#Design)

    -[Colour Scheme](#Colour-Scheme)
    -[Typography](#Typography)
    -[Imagery](#Imagery)
    -[Wireframes](#Wireframes)
    -[Features](#Features)
    -[Accessibility](#Accessibility)

-[Technology Used](#Technologies-Used)

    -[Languages Used](#Languages-Used)
    -[Frameworks,Libraries & Programs Used](#Frameworks,-Libraries-and-Programs-Used)

-[Deployment and Local Development](#Deployment-and-Local-Development)

    -[Deployment](#Deployment)
    -[Local Development](#Local-Development)
        -[How to Fork](#How-to-Fork)
        -[How to Clone](#How-to-Clone)

    -[Testing](#Testing)
        -[W3C Validator](#W3C-Validator)
        -[Solved Bugs](#Solved-Bugs)
        -[Wave Testing](#Wave-Testing)
        -[Full Testing](#Full-Testing)
    -[Credits](#Credits)
        -[Code Used](#Code-Used)
        -[Media](#Media)
        -[Acknowledgments](#Acknowledgments)

        ---

    ## User Experience (UX)

    Milestone01 is a dreadlock saloon website with the aim of enhancing beauty with dreadlocks styling.

    ### User Stories

    #### Client goals

    -To be able to view the site on different divices
    -To make it easier for potential customers to view the packages we offer.
    -Have the ability to make a booking
    -Have customers access us easily and effortless.

    #### First Time Visitors Goals
        -Finding out what is on offer.
        -Would want to see pictures or video of previous work.
        -I want to be able to book or make contact.
        -I want to be able to navigate through the website with ease.

    #### Returning Visitors Goals

        -I want to be able to make a booking effortlessly.
    
    ## Design

    ### Colour Scheme

    ![Milestone01 Colour Pallete](docs/Colour-Scheme
    .png)

    I opted for a clean modern colour pallete where each colour compliments one another. The colour pallete was created using the [coolers](https://coolors.co/) website.

    ### Typography

    Google Fonts was used for the following fonts:

    -Roboto is used across the site for all text on the site. It is a sans-serif font.


    ### Imagery

    All images on the webpage were taken from unsplash.com. I have credited these in the [credits] section.

    ### Wireframes

    ### Home Page

    ##Features
    The website consists of three pages and a modal. Home, Packages, Gallery and Booking modal.

    All three pages have the following elements in common:
    A responsive navigation bar at the top of the page allows the user to easily explore the website. On the right-hand side of the navigation bar are links to the packages page, gallery page and booking modal. To enable a positive user experience the navigation links are condensed into a burger toggler button on smaller devices. This was done to prevent the navigation bar from looking cluttered.
    A footer that comprises of social media links to Facebook, Instagram, Twitter and Youtube. The footer also contains the address of the company.

### Home Page: Learn about our salon, our mission, and our commitment to excellence.
    Four different images of clean styled dreadlocks in the header.
    A heading and paragraph explaining who I-Three are.
    Four different images of clean styled dreadlocks in the header.

### Packages: Explore our service packages, pricing, and special offers.
    The three packages which are on offer to the user.
    Text explaining the packages.
    A book now button underneath the packages to allow the user easy access to the bookings modal.
<ul>
<li>Starter</li>
<li>Maintainance</li>
<li>Styling Perfection</li>
<a href="Booking.html">Booking.html</a>
</ul>

### Gallery: View stunning photos of our clients’ dreadlocks transformations.
Text showing users what to expect from I-Three Dreadlocks Salon on the gallery page.
A grid gallery showcasing I-Three's completed work. This will give confidence to the user in the companies ability.


<img src="assets/img/African_Pride.jpg" alt="An African queen with Pride">
<img src="assets/img/ladylocks.JPG" alt="A woman with thin grey locks">
<img src="assets/img/clean_shave.jpg" alt="A clean-shaven gentle locks">
<img src="assets/img/colored_locks.jpg" alt="A lady with long colored locks">

## Deployment and Local Development

### Deployment

Github Pages was used to deploy the live website. The instructions to achieve this are below:

1. Log in (or sign up) to Github.
2. Find the repository for this project, Dhaddas-Detailing
3. Click on the Settings link.
4. Click on the Pages link in the left-hand side navigation bar.
5. In the Source section, choose main from the drop-down select branch menu. Select Root from the drop-down select folder menu.
6. Click Save. Your live Github Pages site is now deployed at the URL shown.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, Apostle01/Milestone01
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the Milestone01 repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, Apostle01/Milestone01
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Testing

Testing was continuous throughout the website build. I used Chrome developer tools to identify and address any issues as they arose.

- Upon meeting with my mentor, we identified that my initial colour scheme had contrast issues. This has been resolved by choosing a new colour scheme that allows for adequate contrast been background and foreground colours.

- My mentor also pointed out that the images within the website were .png format which hindered the performance of the website. To combat this some images have been converted to .jpg format to significantly improve performance.

- On the Packages page. the list items were out of alignment and not centered even after using the bootstrap text-center class. This was due to padding, which has now been removed to center the list of items.

### W3C Validator

W3C validator was used to validate the HTML on all pages of the website. It was also used to validate CSS in the style.css file.

One issue I was coming across when testing my html page was an error displayed by w3. Trailing slash on void elements has no effect and interacts badly with unquoted attribute values.

- [index.html](assets/img/html-Validator.png)
- [style.css CSS](assets/img/CSS-Validator.png)


-[Jest](assets/img/Jest-test.jpg)
-[Jest Test](assets/img/Jest-testing.png)

### Wave Testing
- [Index Page HTML](assets/img/Wavetest.png)
- [Packages Page HTML](assets/img/Wavetest1.png)
- [Gallery Page HTML](assets/img/Wavetest2.png)

### Full Testing

Full testing was performed on the following devices:

- Laptop:

  - Lenovo Laptop

- Mobile Devices:
  - iPhone 12 pro.
  - iPhone 11 pro.
  - Phone X.

Each device tested the site using the following browsers:

- Google Chrome
- Safari

#### Home Page

| Feature            | Expected Outcome                                                 | Testing Performed                  | Result                                      | Pass/Fail |
| ------------------ | ---------------------------------------------------------------- | ---------------------------------- | ------------------------------------------- | --------- |
| The sites logo     | Link directs the user back to the home page                      | Clicked title                      | Home page reloads                           | Pass      |
| Packages link      | Link directs user to Packages page                               | Clicked link                       | Packages page loads                         | Pass      |
| Gallery link       | Link directs user to Gallery page                                | Clicked link                       | Gallery page loads                          | Pass      |
| Links hover effect | All nav bar links highlight yellow when hovered over             | Hover over each button on the page | Each button turned yellow when hovered over | Pass      |
| Social links       | The corresponding social website opens on a new tab when clicked | Clicked social links               | Social website opens in new tab             | Pass      |
| Book Now Link      | Opens up booking modal                                           | Clicked link                       | Booking modal opens                         | Pass      |

#### Packages Page

| Feature                      | Expected Outcome                                                 | Testing Performed                  | Result                                      | Pass/Fail |
| ---------------------------- | ---------------------------------------------------------------- | ---------------------------------- | ------------------------------------------- | --------- |
| The sites logo               | Link directs the user back to the home page                      | Clicked title                      | Home page reloads                           | Pass      |
| Packages link                | Link directs user to Packages page                               | Clicked link                       | Packages page loads                         | Pass      |
| Gallery link                 | Link directs user to Gallery page                                | Clicked link                       | Gallery page loads                          | Pass      |
| Links hover effect           | All nav bar links highlight yellow when hovered over             | Hover over each button on the page | Each button turned yellow when hovered over | Pass      |
| Social links                 | The corresponding social website opens on a new tab when clicked | Clicked social links               | Social website opens in new tab             | Pass      |
| Book Now link                | Opens up booking modal                                           | Clicked link                       | Booking modal opens                         | Pass      |
| Book Now link under packages | Opens up booking modal                                           | Clicked link                       | Booking modal opens                         | Pass      |

#### Gallery Page

| Feature            | Expected Outcome                                                 | Testing Performed                  | Result                                      | Pass/Fail |
| ------------------ | ---------------------------------------------------------------- | ---------------------------------- | ------------------------------------------- | --------- |
| The sites logo     | Link directs the user back to the home page                      | Clicked title                      | Home page reloads                           | Pass      |
| Packages link      | Link directs user to Packages page                               | Clicked link                       | Packages page loads                         | Pass      |
| Gallery link       | Link directs user to Gallery page                                | Clicked link                       | Gallery page loads                          | Pass      |
| Links hover effect | All nav bar links highlight yellow when hovered over             | Hover over each button on the page | Each button turned yellow when hovered over | Pass      |
| Social links       | The corresponding social website opens on a new tab when clicked | Clicked social links               | Social website opens in new tab             | Pass      |
| Book Now Link      | Opens up booking modal                                           | Clicked link                       | Booking modal opens                         | Pass      |

#### 404 Page

| Feature            | Expected Outcome                                                 | Testing Performed                  | Result                                      | Pass/Fail |
| ------------------ | ---------------------------------------------------------------- | ---------------------------------- | ------------------------------------------- | --------- |
| The sites logo     | Link directs the user back to the home page                      | Clicked title                      | Home page reloads                           | Pass      |
| Packages link      | Link directs user to Packages page                               | Clicked link                       | Packages page loads                         | Pass      |
| Gallery link       | Link directs user to Gallery page                                | Clicked link                       | Gallery page loads                          | Pass      |
| Links hover effect | All nav bar links highlight yellow when hovered over             | Hover over each button on the page | Each button turned yellow when hovered over | Pass      |
| Social links       | The corresponding social website opens on a new tab when clicked | Clicked social links               | Social website opens in new tab             | Pass      |
| Book Now link      | Opens up booking modal                                           | Clicked link                       | Booking modal opens                         | Pass      |

#### Booking Modal

| Feature      | Expected Outcome         | Testing Performed | Result                   | Pass/Fail |
| ------------ | ------------------------ | ----------------- | ------------------------ | --------- |
| Book Button  | Opens confirmation modal | Clicked button    | Confirmation modal opens | Pass      |
| Close Button | Closes modal             | Clicked button    | Modal closes             | Pass      |

## Credits

### Code Used

I've used code and classes courtesy of Bootstrap, this can be seen throughout my code with comments.

W3 Schools for the favicon and learning how to manipulate a modal using JavaScript.

### Media

All my media was taken from [Unsplash](https://unsplash.com/).

### Acknowledgments

- My mentor for their guidance and support.
- My cohort for support.
- Code Institute for informative course material.
- The Slack community for help and support.


    
