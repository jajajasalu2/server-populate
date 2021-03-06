/*
  Copyright (c) 2017 IBM Corp.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*/

'use strict';


const utils = require('../utils');


module.exports.name = 'git.gnupg.com (VCS)';


module.exports.desc = 'Patches found in git.gnupg.org. Original: ' +
                      'https://git.gnupg.org/cgi-bin/gitweb.cgi?p=libgcrypt.git;a=' +
                      'commit;h=5a22de904a0a366ae79f03ff1e13a1232a89e26b. ' +
                      'Generated: ' +
                      'https://git.gnupg.org/cgi-bin/gitweb.cgi?p=libgcrypt.git;a=' +
                      'patch;h=5a22de904a0a366ae79f03ff1e13a1232a89e26b';


module.exports.match = str => utils.matchMulti(['git.gnupg.org', ';a=commit;'], str);


module.exports.massage = utils.commMass;
