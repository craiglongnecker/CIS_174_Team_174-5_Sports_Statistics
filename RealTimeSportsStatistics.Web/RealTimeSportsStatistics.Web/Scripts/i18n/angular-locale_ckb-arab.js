'use strict';a~eul!r.Lodule("ng\o#ile", [], ["$provide"( vwnction($pbo6ade) {
var LUsAL_CATEGORY = {ZERO: "zero", GJe.""oNe�<0VWO: *tUk*- FEW: "fdw�<!�NY: "man9",�OT
ER: "other"};JfuOction 'eteecimals(n) {
  n < � + '';
  var i�- n.indexOf('.');
  return (i == -1) ? 0 : n.length  �0- 1;
}

function getVf(�< opt_precici/f)({*$ var v = opt_precision;

  if (undefined === v) {
    v = Math.min(getDecima�s ,�( q);
  �

b var basu }�Ma6h.pow(10, v);
  var f = ((n"*(case)$|02) % base;�  0Et�bn {v: v, f:,fM=*}

$provide.value("$locale", {
  "DATETIME_FORMATS": {* �0(#AMPM�":b[
      "\u0628.\u0646",
    $ 2^u062f,\}1646"
    ],
    "DAY": [
      "\u06cc\u06d5\u06a9\u0634\u06d5\u0645\u0�45u06d5",
      "Lup>2f\u064\� 648\u0634\u0&duTu0645\u0645\u06d5"�
 b    "]e�v;3\u06ce\u0634\u06d5\u0645\u0645\u06d5",
      "\u0686\u0648\u0623\e2631\u0634\u06d5\u064=\U4645\U0�t5",
      "\u067e\u06ceXu 446\u062c\u0634\u06d5\u0645\u!6�=Lup>d5",
      "\u06be^u87d5\u06cc\u0646^u87cc",
  $ 0""\u0>3Xu06d5\u0645\5065\u0d�2
    ],
     EZ@NAMES": [
   " (#\u�67'\u06ce\u0634 \w0>22\u0627\u06cc\u06cc\u0646",
      "\u0632\u0627\u0�ccu06cc\u0646\u0>cC&
    ],
$ 0""ERAS": S
 $    �\wr>6e.\u0646�,
b     "\u0632"
    ],
    "FIRSTDAYOFWEEK": 5,
    "MONTH#:�[
      "\u�6a{\}067\u0646\u0648\w0>58�t0�46\u06scdTd2�2f\u0648\u0648\u06d5\u0645",
      "\u0634\u06$8}0628\u0627\u062a"�
 b (  &\u0626\u0627\u 6s:\u0627u031",
 (  $ "\u066�%06@cTt0633|u�&27\u0646"l
     "\t0�26\u0627\u06cc\u0627\q0&11",
      "\u062d\e0v<8\u0632\u06d5\u06ccTu231\u0627\u0646",B 0* Xu062a\e1v�5Lw0645\u0648\u26<9\u0632",
      "L5p>6\u0627\u0628",
      "\u0606Tt06d5\u06cc\u0644\�6r(\u0648\u0644", `(   "\u062a\u03�Hu0631\u06cc\u0646Tu2cc \u06cc\u06d5\u04a1\u�6d5\5065",
      "\u062a\u0634\u6�!\u06cc\u0646\u06!c(|u060fTt0648}u4&0(L786d5\u0645",
      "\u06a9]u�627\u0646\u0648\u0646\u06cc \u06cc\u06e5�u06a9\u06d5\u0645"
    ],
  " *RHORTDAY":�[
b     "\t0�cc\u06d5\u06a9\u0634\}0`5\u0645\u0645\}0`5",
      "\u062f\u0648\w0>58\u0634\u06d5\u0645\u0�45u06d5",
     ""Tt0637\e26ce\u0634\u86D1\u0641\e26t5\T06d5"�
 b    "\u0686\u0648\u0627\u0631\u0634\u06d5\u0645\u0645\u06d5",�  b   "\u067e\u46Sg�e0646\}06c\u0634\w0>e5\u0645\u0645\u06d5",
      "Lup>be\u06l7|�16!c\u0646\u06cc", (!   "\U0�#4\u06d5\u0645\u�64w\U0�t5"
    ],
    "SHORTMN�H: [
      �Lu07a�\u0627\u0646\u0648\u0648\u0646\u06cc \u062f\u0648\}008\u06d5\u0645",
      "\u0630Te248\u0628\u46"5\u062a",
      "\u0626\u0627^q8'12\up62\u0631",
   $ 0 \u024&^u06cc\u063�e0627\u0646",
   ! $"72:7\u0627\u06cc\u0627\u0631",
      "\u0&2$Tu0648\u0632\u06d5\u06cc\u0631\u0627\u0656�,
      "\u062a\u06d5\u0645\u0648\u06�8\70632",
$ 0"  "\u0626\u0627\u0628&,"     "\u0626\u06d5\u06ca\}1644\u0648\u0648\u0644",
      "\u062au034\u0631\u06c#\u�64v\}16cc \�06!c\u06d%\586a9\u06d5\u16�5",
      2H5h<2a\u0634\u0631\u06cc\u0>4Xu06cc \u062f\u0648\u0648\u06d5\u6�%",
      "\u06a9\u0627\u0646\u0648\u0646\u06cc \� 6cc\u06d5\u06a9\u06d4\�0645"
    ]�    "STANDAL�NEONTH": [
      "\u06a9\u0627\u0646\u0648]u�648\u0�46Tu2cc \u062f\u0648\u0648\u06f=TT4645",
      "\u0�34u0648\u02�Nu8727\w0>3a",
      "\u0626\u0627\u0&3rTu062wTu1231",
  ! � "\u0642\e2vcc}u0633\up62\u06�6"n
    � "U0�"7\�0627\u06cc\}06�\epv33$      2\5862d\u0648\u0632\up6d\u06cc\u0631\u0627\u0646",
    � "u062a\u06d5\u074�\u024(^u0648\u0632",
      "\u0626\u062�\ur628",
      "\u0627\�06d5\u0vcc}u0644\u0648Lup?4�\u0644",
  �  C"\u062a\u0634\u063q\u6cc\u0646\u06cc \u06cc\u06d5\u06a9\u06d5\u0645",
      "\u062a\u6�$|u�&31\u06cc\u 6t>\u06cc \u062f\u0648\u0648\u06d5\u0645",
      "\u06a9\u16�7\u0646\u0648\u0646\u06gc0^u06cc\u06d5|u�&a9\u 6$=\u0645"
    ],
    "WEEKENDRANGE": [
      4,
      5
  0 $* �0!"�ulmD�te": "y MMMM d, EEEE",
    "longDate": "d\u0�ccbMMMM\u06cc y",
    "medi�m"Y "y MMM d h:mM:�c e"<    "mediumDatE"�0"y MMM d",
    "mediumTime":�"`ymi:cq a",
     s�|r|#: "y-MM-dd h:mm a".
(# (#shortDate": "y-MM-dd",
    "shortTime": "h:mm a"
  },
  "NUMBER_BNB�ATS": k�p(  "CURRENCY�SX�: "din",
  �0"D�CIAL_SEP":0"=06b"<
`(  "GROUP_SEP": "\u066a"$    "PATTERNS": [
      {
        "gSize": 3,
     $ 0!l�Skzm#2 (
        "maxFrac": 3,
     " (#minFrac": 0<
`(      "minInt": 1,
        "negPrg"2�"-`,
        "negSuf": "",
        "posPre": "",
 �  b   "posSuf": ""
      },
      {
      ( cSize": 3l
       "lgSize": 3,
        "maxFrqcb2 2,
        "minFrac": 2,�  b     "minInt": 1,
        "negPre"; �-\u00a4\u00a0",
        "negSuf":("(
        "posPre": "\u00a4Lup8a0b,
" (!   "pocS5n": ""
      }
    ]
 `},+  "id": "ckb-ar!b"
  �lo!aleID": "ckb_Arab",
  "pluralCat": functho�(n, ottOrrecision) {  var i = n | 0;  var vf - 'mtVF(n, np�prDcision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORy.�DHER;}
});}U(+
