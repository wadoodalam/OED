/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

 const { mocha, expect, testDB } = require('../common');
 const Timezone = require('../../models/Timezone');
 
 
 mocha.describe('Timezone', () => {
    mocha.it('timezones contained in the array', async () => {
         conn = testDB.getConnection();
         
         const expectedreading1 = new Timezone("GB", "GMT" ,'00:00:00');
         const expectedreading2 = new Timezone("posix/Africa/Bangui", "WAT" ,'01:00:00'); 
         const expectedreading3 = new Timezone("posix/Africa/Harare", "CAT" ,'02:00:00' );
        
         const timezoneReadings = await Timezone.getAllTimezones(conn);

         expect( (timezoneReadings).includes(expectedreading1) );
         expect( (timezoneReadings).includes(expectedreading2) );
         expect( (timezoneReadings).includes(expectedreading3) );
     });
   
 }); 