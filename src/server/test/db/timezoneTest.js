/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

 const { mocha, expect, testDB } = require('../common');
 const Timezone = require('../../models/Timezone');
 var obj1 = {
    name:  "GB", 
    abbrev: "GMT",
    offset: "00:00:00" 
 }
var obj2 = {
    name: "Atlantic/South_Georgia",
    abbrev: "-02",
    offset: "-02:00:00"
}

 var timezoneExpectedReading = [{ obj1}, {obj2}];

 mocha.describe('Timezone', () => {
    mocha.it('timezones contained in the array', async () => {
         conn = testDB.getConnection();
         var timezoneReadings =  await [Timezone.getAllTimezones(conn)];
         expect( timezoneReadings.includes(timezoneReadings) );
     });
 }); 