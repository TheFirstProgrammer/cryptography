/*
Created date: 2018-January-07
Created by:   Don Voxuan
Description: This library is a fun collection of classical cryptograms, stenopgraphy techniques, ciphers, and cryptoanalysis tools.  In cryptography, a classical cipher is a type of cipher that was used historically but now has fallen, for the most part, into disuse.  Most classical ciphers can be practically computed and solved by hand; usually very simple to break with modern technology.  

Approach: As with all of my code, I am for readability over fancy coding techniques that makes it challenging for casual developers to decipher.  For example, I avoid fancy shortcut technqiues and regex syntax whenever possible that would make it challenging to step through the code.

Disclaimer: The code in this library is strictly for entertainment purposes only. Use of this library for commercial or security purposes will be at your own peril! 

Caesar Cipher
Null Cipher
*/

var letter = []; //shorthand of new Array();
letter[0]  = " "; //currently of no use except to occupy a slot
letter[1]  = "A";
letter[2]  = "B";
letter[3]  = "C";
letter[4]  = "D";
letter[5]  = "E";
letter[6]  = "F";
letter[7]  = "G";
letter[8]  = "H";
letter[9]  = "I";
letter[10] = "J";
letter[11] = "K";
letter[12] = "L";
letter[13] = "M";
letter[14] = "N";
letter[15] = "O";
letter[16] = "P";
letter[17] = "Q";
letter[18] = "R";
letter[19] = "S";
letter[20] = "T";
letter[21] = "U";
letter[22] = "V";
letter[23] = "W";
letter[24] = "X";
letter[25] = "Y";
letter[26] = "Z";

/*
Caesar cipher aka Caesar's cipher, the shift cipher, Caesar's code or Caesar shit is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number positions left or right down the alphabet.  For example, with a left shif of 3, D would be replaced by A, E would become B, and so on.

Parameters:
input - The string message that will be evaluated.
shift - The direction of the shift which can have a value of "left" or "right" rotation.
numpos - The number of positions down the alphabet.
*/
function rotateCaesarCipher(input,shift,numpos)
{
  input = input.toUpperCase();

  var output = "";

  for(var i=0;i<input.length;i++)
  {
    for(var key in letter)
    {
     //alert("letter is " + "'" + letter[key] + "'" + " and message letter is " + "'" + input.charAt(i) + "'");
     if(letter[key] === input.charAt(i)) 
     {
       if(shift.toUpperCase()=="L") 
       {
         output += letter[(parseInt(key) - numpos)];
       }
       else
       {
         output += letter[(parseInt(key) + numpos)];
       }
     }
    }
  }
  
  return output;  
}

/*
Null ciphers, aka concealment ciphers are unencrypted text messages where plaintext is mixed with a large amount of non-cipher material.

Parameters:
input - The string message that will be evaluated.
position - The position of the letter of each word to use. First character is at index 0. It is advised to limit the position number to 2 (i.e. the third character) since there are words with just 1-3 characters in the English language such as "I", "a", or "in".

Note: If a numeric string is passed instead, then function will interpret each character as part of a pattern. For example passing a string message of "Susan says Gail lies. Matt Let's Susan feel jovial. Elated Anne?" with parameter "012" will result in "SAIL AT SEVEN". Remember, the first character is at index 0, not 1!
*/ 
function decipherNullCipher(input,position)
{
  var word = input.split(" ");
  var output = "";
  
  if(typeof position==='number')
  {
    for(var i=0;i<word.length;i++)
    {
      output += word[i].substring(position,position+1) + " ";
    }
  }
  else //use pattern
  {
    var pospatt = [];
    for(var x=0;x<position.length;x++)
    {
      pospatt[x] = parseInt(position.charAt(x));
    } 

    var y = 0;

    for(var i=0;i<word.length;i++)
    {
      if (y>pospatt.length-1) y=0;
      output += word[i].substring(pospatt[y],pospatt[y]+1) + " ";
      y++;
    }
  }
  
  return output.trim();
}


/* 
Replaces each letter by its partner 13 characters further along the alphabet. That is, rotate by 13 places.
For example, HELLO becomes URYYB (or, conversely, URYYB  becomes HELLO again).

Parameters:
input - The string message that will be evaluated
*/
function rotateROT13(input)
{
  input = input.toUpperCase();

  var output = "";

  for(var i=0;i<input.length;i++)
  {
    for(var key in letter)
    {
     //alert("letter is " + "'" + letter[key] + "'" + " and message letter is " + "'" + input.charAt(i) + "'");
     if(letter[key] === input.charAt(i)) 
     {
       if(key>=1&&key<=13) //letters A thru M
       {
         output += letter[(parseInt(key) + 13)];
       }
       else if(key==0)
       {
         output += letter[parseInt(key)]; //no conversion needed, so just return a space
       }
       else //get inverse value for letters N thru Z
       {
         output += letter[(parseInt(key) - 13)];
       }
     }
    }
  }
  
  return output;
}