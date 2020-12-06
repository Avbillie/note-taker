[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://www.javascript.com/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)   
# Note Taker

## Description

This application can be used to write, save, and delete notes. Application will use an express backend and save and retrieve note data from a JSON file.

## Table of Contents

[1. Description](#Description)

[2. Installation](#Installation)

[3. Usage Information](#Usage)

[4. License](#License)

[5. Contributing](#Contributing)

[6. Tests](#Tests)

[7. Questions](#Questions)

## Installation

In order for this appllication to work correctly the following npm needs to be installed:

``npm i express``

## Usage

On start up of the application the user will be provide a button to click that will navigate them to the not taking page. Once at the not taking page the user will be able to input a not in the note section, once both fields have been filled out a save icon will appear in the upper right corner of the application that will allow the user to save once clicked on. The save note will appear on the right left side of the screen, user will be able view the note by clicking on the note. To delete the not user must click the trashcan icon next to the note they wish to delete.

* The following HTML routes are used:

    * GET `/notes` - Returns the `notes.html` file.

    * GET `*` - Returns the `index.html` file.
  
* The following API routes are used:

    * GET `/api/notes` - ReadS the `db.json` file and return all saved notes as JSON. 

    * POST `/api/notes` - ReceiveS a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

    * DELETE `/api/notes/:id` - Receives a query parameter containing the id of a note to delete. 

## License

Copyright (C) Anthony Billie this project is licensed under the [GNU General Public License v2.0](/LICENSE.md).

## Contributing

Feel free to contribute to this application.

## Tests

[Demo](https://youtu.be/JatcO-yQ8jU)

## Questions?

Feel free to email all your questions to [Anthony Billie](mailto:anthonybilliejr2021@gmail.com?subject=[GitHub]%20Source%20).

Want to see more? Visit my gitHub account [GitHub](https://github.com/avbillie)!
            
