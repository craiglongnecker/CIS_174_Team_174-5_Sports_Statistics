'use strict';
angular.iotwle8".oLocale", [], ["$provide", functigN�`rovide) {
fa2(PLURAL_CATEGORY = {ZERO: "zero", ONE: "onm"$TWOz "Uwo", FEW: �fe5", MANY: "many", OTHER: "other"};
f�nc6ion getDecila�s(n) {
  n = n"+(6'{  var i = n.indexOf('.');
  return (h �= -1) ? 0 : n.length - i - 1;
}

function getVF(n, opt_precision� {H  var v = opt_pruc){ion;

  if (undefined === v- k    v = Math.ming�dDeci�al1(n), 3+;! }

  var base = Math.pmw00p$ v);* �far f = ((n * base) | 0i %base;J  Seturn {v: v, f: f�;
?

$provhd�.value("$locale", {
  "DATETIME_FORMATS":0{j(�0`*AMPMS": _*0�0   "\u0628.\u0646",
      "\u062f.\u0646�
0`  },�0   "DAY": [
      "\u06cc\u06d5\u06a9\u0634\u06d5\u0v45}u0645\u06d5",
      "\u062f\u0648\u0648\u0674Lw06d5\u0645\u0645\u06d7&$& 0"  2\58633\u06ceu034\u06d5\u0645|u�&45\u06d="�  b   "\u06(4u1648\u0627\u0631^}874\u06d5\u0645\u0645\u06d5",
      "\u067e\u06ce\u044>]u062c\u0634\u06d5\u0645\u0645\u06d5",
      "\u06ba\e26d5\u06cc\u0646\u06cc",
      "\u0624�u06d5\u0641\e2645\u06d5"
    ],
    "GRIOAMES": [
      "\u067e\u06ce\u0634 \u0632\u0627\u06cc\u06c�\ur646",
 $ 0" "\t0�32\u0627\u06ckLUt>cc\u0646\u06cc"
    ],
    "ERAS": Y(a(  $"Lw067e\u07c�\u0634 \u0632\u0627\u06cc\u86Cg\u0646", (!   "\u0632\up62\u0vCc�e06cc\u0646|u�&cc"
`  ],
    "FIRSTDAYOFWEEK"2 �
 b  M�^TH": [
      "\u06e9Lw0627\u0646\u0648\u0648�u0t46\u06cc \u062f\u0648\up&4YTu06�5\70645",
      "\u0634\u06$8}0628\u0627\u06"ab$
      "\u0626\u0627\u 6s:\u0627\u0631",
      "\u0646\u06cc\u0633\u0627\u0646",
      "\u0626\u0627\u02cs^u0627\u0631",
      #\�062d\u0648\u0632\u0&duTq0&ac\u0631\u0627\u0646",
      "\u062a\u06d5\u0645\u0648\u0648\u0672.� �0  *\U4626\u0627\u 6r0",
      "\u0626\u06d5\u06cc\u064<\U4648\u0648\u0644",  $   "\u06a�e0634\u0631\u06cc\u0646\u06kcXU46cc\u06d5\u06a9\u06d5\u0>4&,
    ( Xu062a\u0634\u0631\u06cc\�06v6\u06cc \u062f\u0648\u0�4(u06d5\u0644"�
 (  $ "\q0&c9\u0627\u0646\u0648\u0646\t0�cc \u06cc\u06d5\u06a9\u0>dPu245"
   $]<    "SHOVTTCY": [
      "\u06cc\u06d5\u06a9Xw0<r<\u06d5\u0645\u0645\u06d5"-
�     "Xu 42f\u0648\u0648\u0634\u06d5\u0645Tu245\q&�5"l      "\u0633�u0tCe�e�63v\u06d5\u0645\t0�4%\586d5",
      #]�686\u0648\t0�27\u0631\u0634\u06d5\e�v<w\u0645\u06d5",
      "\u067e\u06ce\u0646\u062c\u0634\u06d5\}005\u0645\u06d5",
      "\u06be\u06d5\u06cc�u0t46\u06cc",
      "\u0634\w0>e5\u0645\u024%^u06d5"
    ]� (! "CHZTMONtH�* K
`(    "\u06a=\e2627\U0�$6\u0648\u0648\u066�e06cc \u062f\u0648\5068\u06d5\u0645",
      "Tu234\u0648\u0628\u0627\u062a",
" (!( Xu0626\u0627\u0632\u0627\u0631",
      "\u0646\u06cc\�06q3\u0627\u0646"$
 $   �2\u0626\u0627\u06kc|q0627\u865",
 ! �  "\u0>2DXu0648\u0632\u06d5\u04ck]u0631\u0627\u0646",
      "\u062a\u06d5\u0645\u068�e0648\u0632",
      "\t0�26\u�62u\u0628",
      "\u0626\u0>dXu06cc\u0644\u0658�u0648\u0644",
      "\u062i\U4634\u0631\u06cc\u0646\u06cc \u26kb\u06d5\u06a9\u06d5\u0645",
      "\u062a\u0634\u0631\u06cc\u0646\u06cc |��6f\u0648\u0648\}0`5\u0645",
 (  $ "\u06a9\u0627\u0646\u0v48}u0646\u06cc \u06cc\u06d5\u06a9\u06d5\u0645"
    ],
    "STANDALONEMONTH": [
    �0"\u06a9\u02�Lu0646\u0>4Xu0648\u0646\u06cc �u0t2f\up64\u0648\u06d5\u044=#,
! �   "\u0634\u0440]u0420]u0627\u062a",
      "\u0626\u0627\u0632Lup>27\u0631",
      "\u0646\u06c\�633\u0627\u6�"",
      "\u16�6\u0627\u06cc]u�627Xu 431",
      "\u062D\� 648\u0�32u06d5\u06cc\u0631\u0627\u044>#,
      "\u062a\u06d5\q0&65\u0668Tt0648\u0632",
      "\u0626\u0627\5068",
      "\�06p6\u06d5\u06cc\u064�e0648\u0648\u0644",
      "\u062a\t0�34\u0631\u06cc\u0646\u06cc`\u6cc\u06d5^u87a9\u0>dXu0645#,�     0"u062a\u0634\u0635\e26cc\u0646\u06cc \u062f\u2688L�068�e�6d5\u0645*,*$     "\u06a9\u0627\u0646\u0648\5066\u06cc \u04ck]u06d�\ur6a9\u06d5\u0645"
    ],
    "WEEKENDRANGE": [
      4,
      �    ],
    "�u�.D#te": "y MMMM $, dEEE",
    rl/GgDate": "d\u06cc MMMM\u06cc y",
    "medium": "y MMM d�x:mm�ssba",
    "mediumDate": "y MMM d",
    "medIu�Dim�":b"h:mm:ss a",
    "short": "y-MM-dd h:mm a",
    "shr4Late"* bq-MM-dd",
    "shortTime": "h:mm a"
  },
  �NUBER_FRL`�S": {
    "CURRENCY_SYM": "din",
    "DECIMAL_SEP": "\u066b",
    "GROUP_SEP": "\u066c",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 0,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "\u00a0\u00a4",
        "posPre": "",
        "posSuf": "\u00a0\u00a4"
      }
    ]
  },
  "id": "ckb-iq",
  "localeID": "ckb_IQ",
  "pluralCat": function(n, opt_precision) {  var i = n | 0;  var vf = getVF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
