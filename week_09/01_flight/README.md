# Real Time Flight Tracking

Prettier & ESLint plugin for VSCode assisted in the refactoring of this code.

## Description

Using the OpenSky API to track airplanes over the Mexican sky, almost in real-time, by getting every Mexican airplane in a rectangle area (within a fixed min and max latitude and longitude) corresponding to the Mexican airspace. Once selected an airplane for tracking, a marker will be added every 15 seconds, indicating the new position.

## How to run

You can download this folder and open the index.html file on a browser (Mozilla Firefox or Google Chrome).

- Wait for the page to load (map & data)
- Select one or more of the airplanes within the dropdown list.

## Roadmap

- Refactor the code.
- Change old markers to dots, and only set the current position as an airplane.
- Change the airplane image position depending of the trajectory.

## License

MIT License

Copyright (c) 2020 John Williams

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
