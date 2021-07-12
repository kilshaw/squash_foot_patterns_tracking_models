// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.




// generates an array where indices correspond to midi notes
var everyNote = 'C,C#,D,D#,E,F,F#,G,G#,A,A#,B,'.repeat(20).split(',').map( function(x,i) {
    return x + '' + Math.floor(i/12);
});

//returns the midi pitch value for the given note.
//returns -1 if not found
function toMidi(note) {
    return everyNote.indexOf(note);
}

var presetMelodies = {
    'Microcycle- Backcourt Backhand one foot lunge' : {
        notes: [
        {pitch: toMidi('D#4'), quantizedStartStep: 0, quantizedEndStep: 4},
    {pitch: toMidi('C3'), quantizedStartStep: 4, quantizedEndStep: 6},
    {pitch: toMidi('C4'), quantizedStartStep: 6, quantizedEndStep: 8},
    {pitch: toMidi('G4'), quantizedStartStep: 8, quantizedEndStep: 10},
    {pitch: toMidi('D#4'), quantizedStartStep: 10, quantizedEndStep: 16},
    {pitch: toMidi('G4'), quantizedStartStep: 16, quantizedEndStep: 18},
    {pitch: toMidi('D#5'), quantizedStartStep: 20, quantizedEndStep: 22},
    {pitch: toMidi('G4'), quantizedStartStep: 22, quantizedEndStep: 24},
    {pitch: toMidi('D#5'), quantizedStartStep: 24, quantizedEndStep: 28},
    {pitch: toMidi('C4'), quantizedStartStep: 28, quantizedEndStep: 30},
    {pitch: toMidi('C4'), quantizedStartStep: 30, quantizedEndStep: 32}
        ],
        color : [113, 20, 221]
    },
    'Microcycle- Frontcourt Backhand drive' : {
        notes:[
             {pitch: toMidi('D#5'), quantizedStartStep: 0, quantizedEndStep: 4},
   {pitch: toMidi('C5'), quantizedStartStep: 4, quantizedEndStep: 8},
    {pitch: toMidi('D#4'), quantizedStartStep: 8, quantizedEndStep: 12},
    {pitch: toMidi('C4'), quantizedStartStep: 12, quantizedEndStep: 16},
    {pitch: toMidi('G5'), quantizedStartStep: 16, quantizedEndStep: 24},
   {pitch: toMidi('C5'), quantizedStartStep: 24 , quantizedEndStep: 32}
   
        ],
        color : [245, 109, 49]
    },
     'Microcycle- Midcourt FH and BH drive' : {
        notes : [
            {pitch: toMidi('C4'), quantizedStartStep: 0, quantizedEndStep: 4},
            {pitch: toMidi('G4'), quantizedStartStep: 4, quantizedEndStep: 6},
            {pitch: toMidi('D#4'), quantizedStartStep: 6, quantizedEndStep: 8},
           {pitch: toMidi('C4'), quantizedStartStep: 8, quantizedEndStep: 12},
            {pitch: toMidi('D#4'), quantizedStartStep: 12, quantizedEndStep: 16},
           {pitch: toMidi('G4'), quantizedStartStep: 16, quantizedEndStep: 22},
           {pitch: toMidi('D#4'), quantizedStartStep: 22, quantizedEndStep: 24},
            {pitch: toMidi('C4'), quantizedStartStep: 24, quantizedEndStep: 28},
           {pitch: toMidi('D#4'), quantizedStartStep: 28, quantizedEndStep: 32},
            
		],

        color : [221, 219, 20]
    },
    
    
    
      'Microcycle- Frontcourt Forehand drive' : {
        notes : [
            {pitch: toMidi('D#4'), quantizedStartStep: 0, quantizedEndStep: 2},
            {pitch: toMidi('C4'), quantizedStartStep: 2, quantizedEndStep: 4},
            {pitch: toMidi('D#4'), quantizedStartStep: 4, quantizedEndStep: 8},
           {pitch: toMidi('C4'), quantizedStartStep: 8, quantizedEndStep: 12},
            {pitch: toMidi('G4'), quantizedStartStep: 12, quantizedEndStep: 16},
           {pitch: toMidi('C4'), quantizedStartStep: 16, quantizedEndStep: 22},
           {pitch: toMidi('D#4'), quantizedStartStep: 22, quantizedEndStep: 24},
            {pitch: toMidi('C4'), quantizedStartStep: 24, quantizedEndStep: 28},
           {pitch: toMidi('D#4'), quantizedStartStep: 28, quantizedEndStep: 32}
            
		],

        color : [121, 119, 120]
    },
    
    
     'All skips- fast straight feel- (intense pressure)' : {
        notes:[
             {pitch: 72, quantizedStartStep: 0, quantizedEndStep: 1},
             {pitch: 75, quantizedStartStep: 1, quantizedEndStep: 2},
             {pitch: 80, quantizedStartStep: 2, quantizedEndStep: 3},
             {pitch: 75, quantizedStartStep: 3, quantizedEndStep: 4},
             {pitch: 84, quantizedStartStep: 4, quantizedEndStep: 5},
             {pitch: 80, quantizedStartStep: 5, quantizedEndStep: 6},
             {pitch: 75, quantizedStartStep: 6, quantizedEndStep: 7},
             {pitch: 72, quantizedStartStep: 7, quantizedEndStep: 8},
             {pitch: 74, quantizedStartStep: 8, quantizedEndStep: 9},
             {pitch: 77, quantizedStartStep: 9, quantizedEndStep: 10},
             {pitch: 82, quantizedStartStep: 10, quantizedEndStep: 11},
             {pitch: 77, quantizedStartStep: 11, quantizedEndStep: 12},
             {pitch: 86, quantizedStartStep: 12, quantizedEndStep: 13},
             {pitch: 82, quantizedStartStep: 13, quantizedEndStep: 14},
             {pitch: 77, quantizedStartStep: 14, quantizedEndStep: 15},
             {pitch: 74, quantizedStartStep: 15, quantizedEndStep: 16},
             {pitch: 75, quantizedStartStep: 16, quantizedEndStep: 17},
             {pitch: 79, quantizedStartStep: 17, quantizedEndStep: 18},
             {pitch: 84, quantizedStartStep: 18, quantizedEndStep: 19},
             {pitch: 79, quantizedStartStep: 19, quantizedEndStep: 20},
             {pitch: 87, quantizedStartStep: 20, quantizedEndStep: 21},
             {pitch: 84, quantizedStartStep: 21, quantizedEndStep: 22},
             {pitch: 79, quantizedStartStep: 22, quantizedEndStep: 23},
             {pitch: 75, quantizedStartStep: 23, quantizedEndStep: 24},
             {pitch: 75, quantizedStartStep: 24, quantizedEndStep: 25},
             {pitch: 79, quantizedStartStep: 25, quantizedEndStep: 26},
             {pitch: 84, quantizedStartStep: 26, quantizedEndStep: 27},
             {pitch: 84, quantizedStartStep: 27, quantizedEndStep: 28},
             {pitch: 87, quantizedStartStep: 28, quantizedEndStep: 29},
             {pitch: 91, quantizedStartStep: 29, quantizedEndStep: 30},
             {pitch: 84, quantizedStartStep: 30, quantizedEndStep: 31},
             {pitch: 91, quantizedStartStep: 31, quantizedEndStep: 32}
         ],
         color : [242, 61, 91]
     },
    'left right structure converging- (moderate pressure)' : {
        notes:[
            {pitch: 63, quantizedStartStep: 0, quantizedEndStep: 2},
            {pitch: 60, quantizedStartStep: 2, quantizedEndStep: 4},
            {pitch: 63, quantizedStartStep: 4, quantizedEndStep: 6},
            {pitch: 60, quantizedStartStep: 6, quantizedEndStep: 8},
            {pitch: 65, quantizedStartStep: 8, quantizedEndStep: 10},
            {pitch: 60, quantizedStartStep: 10, quantizedEndStep: 12},
            {pitch: 65, quantizedStartStep: 12, quantizedEndStep: 14},
            {pitch: 60, quantizedStartStep: 14, quantizedEndStep: 16},
            {pitch: 67, quantizedStartStep: 16, quantizedEndStep: 18},
            {pitch: 60, quantizedStartStep: 18, quantizedEndStep: 20},
            {pitch: 67, quantizedStartStep: 20, quantizedEndStep: 22},
            {pitch: 60, quantizedStartStep: 22, quantizedEndStep: 24},
            {pitch: 63, quantizedStartStep: 24, quantizedEndStep: 26},
            {pitch: 60, quantizedStartStep: 26, quantizedEndStep: 28},
            {pitch: 63, quantizedStartStep: 28, quantizedEndStep: 30},
            {pitch: 60, quantizedStartStep: 30, quantizedEndStep: 32}
        ],
        color : [221, 44, 87]
    },
    
    'left foot right foot triplet feel- (low pressure)' : {
        notes:[
            {pitch: 63, quantizedStartStep: 0, quantizedEndStep: 3},
            {pitch: 60, quantizedStartStep: 3, quantizedEndStep: 6},
            {pitch: 63, quantizedStartStep: 6, quantizedEndStep: 9},
            {pitch: 60, quantizedStartStep: 9, quantizedEndStep: 12},
            {pitch: 65, quantizedStartStep: 12, quantizedEndStep: 15},
            {pitch: 60, quantizedStartStep: 15, quantizedEndStep: 18},
            {pitch: 65, quantizedStartStep: 18, quantizedEndStep: 21},
            {pitch: 60, quantizedStartStep: 21, quantizedEndStep: 24}
            
        ],
        color : [221, 244, 187]
    },
    'cadenza -(winning shot)' : {
        notes:[
              
              {pitch: 75, quantizedStartStep: 0, quantizedEndStep: 1},
             {pitch: 79, quantizedStartStep: 1, quantizedEndStep: 2},
             {pitch: 84, quantizedStartStep: 2, quantizedEndStep: 3},
             {pitch: 84, quantizedStartStep: 3, quantizedEndStep: 4},
             {pitch: 87, quantizedStartStep: 4, quantizedEndStep: 5},
             {pitch: 91, quantizedStartStep: 5, quantizedEndStep: 6},
             {pitch: 84, quantizedStartStep: 6, quantizedEndStep: 7},
             {pitch: 91, quantizedStartStep: 7, quantizedEndStep: 8},
            {pitch: 75, quantizedStartStep: 8, quantizedEndStep: 9},
             {pitch: 79, quantizedStartStep: 9, quantizedEndStep: 10},
             {pitch: 84, quantizedStartStep: 10, quantizedEndStep: 11},
             {pitch: 84, quantizedStartStep: 11, quantizedEndStep: 12},
             {pitch: 87, quantizedStartStep: 12, quantizedEndStep: 13},
             {pitch: 91, quantizedStartStep: 13, quantizedEndStep: 14},
             {pitch: 84, quantizedStartStep: 14, quantizedEndStep: 15},
             {pitch: 91, quantizedStartStep: 15, quantizedEndStep: 16},
            {pitch: 75, quantizedStartStep: 16, quantizedEndStep: 17},
             {pitch: 79, quantizedStartStep: 17, quantizedEndStep: 18},
             {pitch: 84, quantizedStartStep: 18, quantizedEndStep: 19},
             {pitch: 84, quantizedStartStep: 19, quantizedEndStep: 20},
             {pitch: 87, quantizedStartStep: 20, quantizedEndStep: 21},
             {pitch: 91, quantizedStartStep: 21, quantizedEndStep: 22},
             {pitch: 84, quantizedStartStep: 22, quantizedEndStep: 23},
             {pitch: 91, quantizedStartStep: 23, quantizedEndStep: 24},
              {pitch: 75, quantizedStartStep: 24, quantizedEndStep: 25},
             {pitch: 79, quantizedStartStep: 25, quantizedEndStep: 26},
             {pitch: 84, quantizedStartStep: 26, quantizedEndStep: 27},
             {pitch: 84, quantizedStartStep: 27, quantizedEndStep: 28},
             {pitch: 87, quantizedStartStep: 28, quantizedEndStep: 29},
             {pitch: 91, quantizedStartStep: 29, quantizedEndStep: 30},
             {pitch: 84, quantizedStartStep: 30, quantizedEndStep: 31},
             {pitch: 91, quantizedStartStep: 31, quantizedEndStep: 32}
            
       
         ],
         color : [242, 91, 191]
     },
    
    'Fast feet (high pressure)' : {
        notes:[
             {pitch: 60, quantizedStartStep: 0, quantizedEndStep: 1},
             {pitch: 63, quantizedStartStep: 1, quantizedEndStep: 2},
             {pitch: 72, quantizedStartStep: 2, quantizedEndStep: 3},
             {pitch: 63, quantizedStartStep: 3, quantizedEndStep: 4},
             {pitch: 72, quantizedStartStep: 4, quantizedEndStep: 5},
             {pitch: 80, quantizedStartStep: 5, quantizedEndStep: 6},
             {pitch: 72, quantizedStartStep: 6, quantizedEndStep: 7},
             {pitch: 80, quantizedStartStep: 7, quantizedEndStep: 8},
             {pitch: 72, quantizedStartStep: 8, quantizedEndStep: 9},
             {pitch: 63, quantizedStartStep: 9, quantizedEndStep: 10},
             {pitch: 72, quantizedStartStep: 10, quantizedEndStep: 11},
             {pitch: 63, quantizedStartStep: 11, quantizedEndStep: 12},
             {pitch: 60, quantizedStartStep: 12, quantizedEndStep: 13},
             {pitch: 63, quantizedStartStep: 13, quantizedEndStep: 14},
             {pitch: 72, quantizedStartStep: 14, quantizedEndStep: 15},
             {pitch: 80, quantizedStartStep: 15, quantizedEndStep: 16}
            
         ],
         color : [142, 261, 91]
     },
    
    
    
    'Controlling the rally- (low pressure)' : {
        notes:[
             {pitch: 48, quantizedStartStep: 0, quantizedEndStep: 8},
             {pitch: 60, quantizedStartStep: 8, quantizedEndStep: 16},
             {pitch: 36, quantizedStartStep: 16, quantizedEndStep: 24},
             {pitch: 46, quantizedStartStep: 24, quantizedEndStep: 32}
 
         ],
         color : [202, 61, 391]
     },
    
    
    
      'Recovery- (take a breather)' : {
        notes:[
             {pitch: 36, quantizedStartStep: 0, quantizedEndStep: 32},
            
 
         ],
         color : [102, 261, 301]
     },
    
    
        'building a rally -(low to high pressure)' : {
        notes:[
              
              {pitch: 36, quantizedStartStep: 0, quantizedEndStep: 1},
             {pitch: 38, quantizedStartStep: 1, quantizedEndStep: 2},
             {pitch: 39, quantizedStartStep: 2, quantizedEndStep: 3},
             {pitch: 36, quantizedStartStep: 3, quantizedEndStep: 4},
             {pitch: 36, quantizedStartStep: 4, quantizedEndStep: 5},
             {pitch: 38, quantizedStartStep: 5, quantizedEndStep: 6},
             {pitch: 39, quantizedStartStep: 6, quantizedEndStep: 7},
             {pitch: 36, quantizedStartStep: 7, quantizedEndStep: 8},
            {pitch: 38, quantizedStartStep: 8, quantizedEndStep: 9},
             {pitch: 39, quantizedStartStep: 9, quantizedEndStep: 10},
             {pitch: 41, quantizedStartStep: 10, quantizedEndStep: 11},
             {pitch: 39, quantizedStartStep: 11, quantizedEndStep: 12},
             {pitch: 38, quantizedStartStep: 12, quantizedEndStep: 13},
             {pitch: 39, quantizedStartStep: 13, quantizedEndStep: 14},
             {pitch: 38, quantizedStartStep: 14, quantizedEndStep: 15},
             {pitch: 39, quantizedStartStep: 15, quantizedEndStep: 16},
            {pitch: 36, quantizedStartStep: 16, quantizedEndStep: 17},
             {pitch: 38, quantizedStartStep: 17, quantizedEndStep: 18},
             {pitch: 39, quantizedStartStep: 18, quantizedEndStep: 19},
             {pitch: 41, quantizedStartStep: 19, quantizedEndStep: 20},
             {pitch: 39, quantizedStartStep: 20, quantizedEndStep: 21},
             {pitch: 41, quantizedStartStep: 21, quantizedEndStep: 22},
             {pitch: 43, quantizedStartStep: 22, quantizedEndStep: 23},
             {pitch: 41, quantizedStartStep: 23, quantizedEndStep: 24},
              {pitch: 39, quantizedStartStep: 24, quantizedEndStep: 25},
             {pitch: 43, quantizedStartStep: 25, quantizedEndStep: 26},
             {pitch: 41, quantizedStartStep: 26, quantizedEndStep: 27},
             {pitch: 39, quantizedStartStep: 27, quantizedEndStep: 28},
             {pitch: 48, quantizedStartStep: 28, quantizedEndStep: 29},
             {pitch: 41, quantizedStartStep: 29, quantizedEndStep: 30},
             {pitch: 39, quantizedStartStep: 30, quantizedEndStep: 31},
             {pitch: 41, quantizedStartStep: 31, quantizedEndStep: 32}
    
        ],
         color : [192, 181, 230]
     },
    
    
    /*
    'Melody 1' : {
        notes: [
            {pitch: toMidi('A3'), quantizedStartStep: 0, quantizedEndStep: 4},
            {pitch: toMidi('D4'), quantizedStartStep: 4, quantizedEndStep: 6},
            {pitch: toMidi('E4'), quantizedStartStep: 6, quantizedEndStep: 8},
            {pitch: toMidi('F4'), quantizedStartStep: 8, quantizedEndStep: 10},
            {pitch: toMidi('D4'), quantizedStartStep: 10, quantizedEndStep: 12},
            {pitch: toMidi('E4'), quantizedStartStep: 12, quantizedEndStep: 16},
            {pitch: toMidi('C4'), quantizedStartStep: 16, quantizedEndStep: 20},
            {pitch: toMidi('D4'), quantizedStartStep: 20, quantizedEndStep: 26},
            {pitch: toMidi('A3'), quantizedStartStep: 26, quantizedEndStep: 28},
            {pitch: toMidi('A3'), quantizedStartStep: 28, quantizedEndStep: 32}
        ],
        color : [242, 61, 91]
    },
    'Melody 2' : {
        notes: [
            {pitch: 50, quantizedStartStep: 0, quantizedEndStep: 1},
            {pitch: 53, quantizedStartStep: 1, quantizedEndStep: 2},
            {pitch: 58, quantizedStartStep: 2, quantizedEndStep: 3},
            {pitch: 58, quantizedStartStep: 3, quantizedEndStep: 4},
            {pitch: 58, quantizedStartStep: 4, quantizedEndStep: 5},
            {pitch: 53, quantizedStartStep: 5, quantizedEndStep: 6},
            {pitch: 53, quantizedStartStep: 6, quantizedEndStep: 7},
            {pitch: 53, quantizedStartStep: 7, quantizedEndStep: 8},
            {pitch: 52, quantizedStartStep: 8, quantizedEndStep: 9},
            {pitch: 55, quantizedStartStep: 9, quantizedEndStep: 10},
            {pitch: 60, quantizedStartStep: 10, quantizedEndStep: 11},
            {pitch: 60, quantizedStartStep: 11, quantizedEndStep: 12},
            {pitch: 60, quantizedStartStep: 12, quantizedEndStep: 13},
            {pitch: 60, quantizedStartStep: 13, quantizedEndStep: 14},
            {pitch: 60, quantizedStartStep: 14, quantizedEndStep: 15},
            {pitch: 52, quantizedStartStep: 15, quantizedEndStep: 16},
            {pitch: 57, quantizedStartStep: 16, quantizedEndStep: 17},
            {pitch: 57, quantizedStartStep: 17, quantizedEndStep: 18},
            {pitch: 57, quantizedStartStep: 18, quantizedEndStep: 19},
            {pitch: 65, quantizedStartStep: 19, quantizedEndStep: 20},
            {pitch: 65, quantizedStartStep: 20, quantizedEndStep: 21},
            {pitch: 65, quantizedStartStep: 21, quantizedEndStep: 22},
            {pitch: 57, quantizedStartStep: 22, quantizedEndStep: 23},
            {pitch: 57, quantizedStartStep: 23, quantizedEndStep: 24},
            {pitch: 57, quantizedStartStep: 24, quantizedEndStep: 25},
            {pitch: 57, quantizedStartStep: 25, quantizedEndStep: 26},
            {pitch: 62, quantizedStartStep: 26, quantizedEndStep: 27},
            {pitch: 62, quantizedStartStep: 27, quantizedEndStep: 28},
            {pitch: 65, quantizedStartStep: 28, quantizedEndStep: 29},
            {pitch: 65, quantizedStartStep: 29, quantizedEndStep: 30},
            {pitch: 69, quantizedStartStep: 30, quantizedEndStep: 31},
            {pitch: 69, quantizedStartStep: 31, quantizedEndStep: 32}
        ],
        color : [108, 57, 234]
    },
    */
};

