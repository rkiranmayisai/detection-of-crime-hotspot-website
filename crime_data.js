const CRIME_DATA = [
  {
    "id": 56,
    "crime_type": "VANDALISM",
    "description": "Minor damage reported.",
    "lat": 17.44172438053944,
    "lng": 78.42428670819794,
    "report_time": "2026-03-16 06:22:01"
  },
  {
    "id": 57,
    "crime_type": "DRUG INCIDENT",
    "description": "Incident logged at local station.",
    "lat": 17.412460523104638,
    "lng": 78.48049997734051,
    "report_time": "2026-04-08 09:20:01"
  },
  {
    "id": 58,
    "crime_type": "ASSAULT",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.449536834246253,
    "lng": 78.40376969771687,
    "report_time": "2026-03-25 17:20:01"
  },
  {
    "id": 59,
    "crime_type": "THEFT",
    "description": "Individual was given a citation.",
    "lat": 17.447248290448787,
    "lng": 78.50941445518527,
    "report_time": "2026-04-08 23:52:01"
  },
  {
    "id": 60,
    "crime_type": "THEFT",
    "description": "Reported by local shop owner.",
    "lat": 17.427480699109275,
    "lng": 78.41572586968891,
    "report_time": "2026-04-04 18:01:01"
  },
  {
    "id": 61,
    "crime_type": "NOISE COMPLAINT",
    "description": "Incident logged at local station.",
    "lat": 17.4030478261607,
    "lng": 78.50593090842804,
    "report_time": "2026-04-01 13:20:01"
  },
  {
    "id": 62,
    "crime_type": "THEFT",
    "description": "Crowd dispersed after warning.",
    "lat": 17.454728634468278,
    "lng": 78.47145723564573,
    "report_time": "2026-03-18 16:31:01"
  },
  {
    "id": 63,
    "crime_type": "TRAFFIC VIOLATION",
    "description": "CCTV footage requested for review.",
    "lat": 17.422776779288284,
    "lng": 78.53496213687559,
    "report_time": "2026-03-23 07:58:01"
  },
  {
    "id": 64,
    "crime_type": "NOISE COMPLAINT",
    "description": "Individual was given a citation.",
    "lat": 17.429782430545668,
    "lng": 78.42742932827319,
    "report_time": "2026-03-25 09:27:01"
  },
  {
    "id": 65,
    "crime_type": "THEFT",
    "description": "Individual was given a citation.",
    "lat": 17.382164921608112,
    "lng": 78.5187719028185,
    "report_time": "2026-03-19 07:25:01"
  },
  {
    "id": 66,
    "crime_type": "THEFT",
    "description": "Minor damage reported.",
    "lat": 17.363953733150314,
    "lng": 78.46216596751238,
    "report_time": "2026-03-30 22:18:01"
  },
  {
    "id": 67,
    "crime_type": "DRUG INCIDENT",
    "description": "Reported by local shop owner.",
    "lat": 17.358546970995096,
    "lng": 78.39876997767466,
    "report_time": "2026-04-10 23:41:01"
  },
  {
    "id": 68,
    "crime_type": "NOISE COMPLAINT",
    "description": "CCTV footage requested for review.",
    "lat": 17.417357163618696,
    "lng": 78.54084552890666,
    "report_time": "2026-03-12 06:31:01"
  },
  {
    "id": 69,
    "crime_type": "ASSAULT",
    "description": "Reported by local shop owner.",
    "lat": 17.398133700036293,
    "lng": 78.4708428848463,
    "report_time": "2026-03-17 05:35:01"
  },
  {
    "id": 70,
    "crime_type": "ASSAULT",
    "description": "Incident logged at local station.",
    "lat": 17.458244048083447,
    "lng": 78.423026544046,
    "report_time": "2026-03-30 11:45:01"
  },
  {
    "id": 71,
    "crime_type": "SUSPICIOUS ACTIVITY",
    "description": "Incident logged at local station.",
    "lat": 17.44897084654182,
    "lng": 78.55119086351434,
    "report_time": "2026-03-20 14:15:01"
  },
  {
    "id": 72,
    "crime_type": "PUBLIC DISTURBANCE",
    "description": "Crowd dispersed after warning.",
    "lat": 17.36142185089075,
    "lng": 78.41661787168698,
    "report_time": "2026-03-29 06:27:01"
  },
  {
    "id": 73,
    "crime_type": "THEFT",
    "description": "CCTV footage requested for review.",
    "lat": 17.36468315594602,
    "lng": 78.53324635412152,
    "report_time": "2026-03-19 02:41:01"
  },
  {
    "id": 74,
    "crime_type": "SUSPICIOUS ACTIVITY",
    "description": "Crowd dispersed after warning.",
    "lat": 17.343796923672468,
    "lng": 78.40857650916189,
    "report_time": "2026-03-15 16:57:01"
  },
  {
    "id": 75,
    "crime_type": "ASSAULT",
    "description": "Individual was given a citation.",
    "lat": 17.453299066542357,
    "lng": 78.51355006281094,
    "report_time": "2026-04-06 21:28:01"
  },
  {
    "id": 76,
    "crime_type": "PUBLIC DISTURBANCE",
    "description": "Incident logged at local station.",
    "lat": 17.452511135455584,
    "lng": 78.50023165422583,
    "report_time": "2026-03-11 15:39:01"
  },
  {
    "id": 77,
    "crime_type": "ASSAULT",
    "description": "Crowd dispersed after warning.",
    "lat": 17.41257294372199,
    "lng": 78.42069789830988,
    "report_time": "2026-03-19 19:50:01"
  },
  {
    "id": 78,
    "crime_type": "THEFT",
    "description": "Minor damage reported.",
    "lat": 17.424464368466662,
    "lng": 78.50846783075683,
    "report_time": "2026-04-07 05:44:01"
  },
  {
    "id": 79,
    "crime_type": "ASSAULT",
    "description": "Crowd dispersed after warning.",
    "lat": 17.442024006457892,
    "lng": 78.4760280646914,
    "report_time": "2026-04-02 02:06:01"
  },
  {
    "id": 80,
    "crime_type": "TRAFFIC VIOLATION",
    "description": "Crowd dispersed after warning.",
    "lat": 17.443775009633427,
    "lng": 78.5333910068673,
    "report_time": "2026-04-03 14:35:01"
  },
  {
    "id": 81,
    "crime_type": "NOISE COMPLAINT",
    "description": "Individual was given a citation.",
    "lat": 17.45813068777435,
    "lng": 78.54544306936357,
    "report_time": "2026-03-15 08:36:01"
  },
  {
    "id": 82,
    "crime_type": "VANDALISM",
    "description": "Crowd dispersed after warning.",
    "lat": 17.406504335757226,
    "lng": 78.46755958805093,
    "report_time": "2026-04-03 19:58:01"
  },
  {
    "id": 83,
    "crime_type": "ASSAULT",
    "description": "Reported by local shop owner.",
    "lat": 17.352446218961415,
    "lng": 78.51844896002618,
    "report_time": "2026-03-17 13:40:01"
  },
  {
    "id": 84,
    "crime_type": "THEFT",
    "description": "Incident logged at local station.",
    "lat": 17.433225291510713,
    "lng": 78.50916319041461,
    "report_time": "2026-04-02 10:56:01"
  },
  {
    "id": 85,
    "crime_type": "DRUG INCIDENT",
    "description": "Reported by local shop owner.",
    "lat": 17.360526740564318,
    "lng": 78.52585430436253,
    "report_time": "2026-03-25 22:49:01"
  },
  {
    "id": 86,
    "crime_type": "DRUG INCIDENT",
    "description": "Minor damage reported.",
    "lat": 17.429652956741936,
    "lng": 78.39950632086386,
    "report_time": "2026-03-30 04:41:01"
  },
  {
    "id": 87,
    "crime_type": "TRAFFIC VIOLATION",
    "description": "Crowd dispersed after warning.",
    "lat": 17.42576543074503,
    "lng": 78.43407955087521,
    "report_time": "2026-03-19 10:35:01"
  },
  {
    "id": 88,
    "crime_type": "VANDALISM",
    "description": "Reported by local shop owner.",
    "lat": 17.399448943023884,
    "lng": 78.47491710534509,
    "report_time": "2026-03-25 13:49:01"
  },
  {
    "id": 89,
    "crime_type": "NOISE COMPLAINT",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.40545996333208,
    "lng": 78.52487371465159,
    "report_time": "2026-03-15 14:25:01"
  },
  {
    "id": 90,
    "crime_type": "THEFT",
    "description": "Individual was given a citation.",
    "lat": 17.395709655212283,
    "lng": 78.48334093604866,
    "report_time": "2026-04-01 23:33:01"
  },
  {
    "id": 91,
    "crime_type": "THEFT",
    "description": "Individual was given a citation.",
    "lat": 17.3981669757969,
    "lng": 78.46264905832116,
    "report_time": "2026-03-21 21:41:01"
  },
  {
    "id": 92,
    "crime_type": "VANDALISM",
    "description": "CCTV footage requested for review.",
    "lat": 17.386387304125627,
    "lng": 78.40987134081384,
    "report_time": "2026-03-20 22:28:01"
  },
  {
    "id": 93,
    "crime_type": "ASSAULT",
    "description": "Incident logged at local station.",
    "lat": 17.402201882148322,
    "lng": 78.43204196414702,
    "report_time": "2026-03-29 08:49:01"
  },
  {
    "id": 94,
    "crime_type": "SUSPICIOUS ACTIVITY",
    "description": "CCTV footage requested for review.",
    "lat": 17.444336828074697,
    "lng": 78.39652659840984,
    "report_time": "2026-04-07 13:48:01"
  },
  {
    "id": 95,
    "crime_type": "SUSPICIOUS ACTIVITY",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.452066322348305,
    "lng": 78.50242556365612,
    "report_time": "2026-03-19 10:25:01"
  },
  {
    "id": 96,
    "crime_type": "DRUG INCIDENT",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.367704322881284,
    "lng": 78.47632492276591,
    "report_time": "2026-03-20 12:27:01"
  },
  {
    "id": 97,
    "crime_type": "ASSAULT",
    "description": "Minor damage reported.",
    "lat": 17.360620127376116,
    "lng": 78.4146831537906,
    "report_time": "2026-04-04 00:49:01"
  },
  {
    "id": 98,
    "crime_type": "THEFT",
    "description": "Minor damage reported.",
    "lat": 17.393845738106464,
    "lng": 78.45735391504294,
    "report_time": "2026-04-02 23:17:01"
  },
  {
    "id": 99,
    "crime_type": "ASSAULT",
    "description": "Crowd dispersed after warning.",
    "lat": 17.410734813381577,
    "lng": 78.42452034788565,
    "report_time": "2026-04-07 20:39:01"
  },
  {
    "id": 100,
    "crime_type": "THEFT",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.440919803142545,
    "lng": 78.55572948432219,
    "report_time": "2026-04-05 18:07:01"
  },
  {
    "id": 101,
    "crime_type": "THEFT",
    "description": "Incident logged at local station.",
    "lat": 17.430281943725706,
    "lng": 78.40127691746669,
    "report_time": "2026-04-05 10:40:01"
  },
  {
    "id": 102,
    "crime_type": "NOISE COMPLAINT",
    "description": "Incident logged at local station.",
    "lat": 17.391458862638167,
    "lng": 78.45780896385861,
    "report_time": "2026-03-30 13:39:01"
  },
  {
    "id": 103,
    "crime_type": "VANDALISM",
    "description": "Individual was given a citation.",
    "lat": 17.340791183164725,
    "lng": 78.50265908255166,
    "report_time": "2026-03-30 17:50:01"
  },
  {
    "id": 104,
    "crime_type": "ASSAULT",
    "description": "CCTV footage requested for review.",
    "lat": 17.411542520261406,
    "lng": 78.4677994920505,
    "report_time": "2026-03-13 11:49:01"
  },
  {
    "id": 105,
    "crime_type": "PUBLIC DISTURBANCE",
    "description": "Incident logged at local station.",
    "lat": 17.408239474334913,
    "lng": 78.45178099431635,
    "report_time": "2026-03-24 20:11:01"
  },
  {
    "id": 106,
    "crime_type": "VANDALISM",
    "description": "Reported by local shop owner.",
    "lat": 17.340204105647956,
    "lng": 78.46420767600681,
    "report_time": "2026-03-12 04:09:01"
  },
  {
    "id": 107,
    "crime_type": "TRAFFIC VIOLATION",
    "description": "Crowd dispersed after warning.",
    "lat": 17.443124172471034,
    "lng": 78.49086116457485,
    "report_time": "2026-04-01 14:04:01"
  },
  {
    "id": 108,
    "crime_type": "SUSPICIOUS ACTIVITY",
    "description": "Incident logged at local station.",
    "lat": 17.340002819266342,
    "lng": 78.54486106740491,
    "report_time": "2026-04-04 00:28:01"
  },
  {
    "id": 109,
    "crime_type": "ASSAULT",
    "description": "Reported by local shop owner.",
    "lat": 17.450570633673397,
    "lng": 78.54887437050554,
    "report_time": "2026-03-27 03:47:01"
  },
  {
    "id": 110,
    "crime_type": "DRUG INCIDENT",
    "description": "Reported by local shop owner.",
    "lat": 17.441879969108314,
    "lng": 78.42453469708012,
    "report_time": "2026-03-19 04:21:01"
  },
  {
    "id": 111,
    "crime_type": "SUSPICIOUS ACTIVITY",
    "description": "CCTV footage requested for review.",
    "lat": 17.383792476921318,
    "lng": 78.53524440179523,
    "report_time": "2026-04-04 05:51:01"
  },
  {
    "id": 112,
    "crime_type": "VANDALISM",
    "description": "Minor damage reported.",
    "lat": 17.375830602082875,
    "lng": 78.54897544917979,
    "report_time": "2026-03-24 21:52:01"
  },
  {
    "id": 113,
    "crime_type": "NOISE COMPLAINT",
    "description": "Crowd dispersed after warning.",
    "lat": 17.347820598859567,
    "lng": 78.43431819190488,
    "report_time": "2026-03-23 21:30:01"
  },
  {
    "id": 114,
    "crime_type": "ASSAULT",
    "description": "Reported by local shop owner.",
    "lat": 17.400037448315693,
    "lng": 78.44968892501183,
    "report_time": "2026-03-27 19:08:01"
  },
  {
    "id": 115,
    "crime_type": "VANDALISM",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.345831837574114,
    "lng": 78.43191929819568,
    "report_time": "2026-04-04 05:06:01"
  },
  {
    "id": 116,
    "crime_type": "NOISE COMPLAINT",
    "description": "Minor damage reported.",
    "lat": 17.419335343043763,
    "lng": 78.44449676653136,
    "report_time": "2026-03-24 22:36:01"
  },
  {
    "id": 117,
    "crime_type": "ASSAULT",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.455883342548084,
    "lng": 78.53802969276201,
    "report_time": "2026-03-15 09:03:01"
  },
  {
    "id": 118,
    "crime_type": "SUSPICIOUS ACTIVITY",
    "description": "Reported by local shop owner.",
    "lat": 17.38525544271032,
    "lng": 78.52340507276921,
    "report_time": "2026-03-24 18:08:01"
  },
  {
    "id": 119,
    "crime_type": "THEFT",
    "description": "Incident logged at local station.",
    "lat": 17.454782042285373,
    "lng": 78.41390785262942,
    "report_time": "2026-03-24 17:37:01"
  },
  {
    "id": 120,
    "crime_type": "VANDALISM",
    "description": "Minor damage reported.",
    "lat": 17.40567718676754,
    "lng": 78.50300323175983,
    "report_time": "2026-03-26 06:21:01"
  },
  {
    "id": 121,
    "crime_type": "THEFT",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.431346470168386,
    "lng": 78.50567942449217,
    "report_time": "2026-03-27 04:24:01"
  },
  {
    "id": 122,
    "crime_type": "THEFT",
    "description": "Individual was given a citation.",
    "lat": 17.456937548561825,
    "lng": 78.53892195008947,
    "report_time": "2026-03-21 14:04:01"
  },
  {
    "id": 123,
    "crime_type": "SUSPICIOUS ACTIVITY",
    "description": "Individual was given a citation.",
    "lat": 17.3650815098848,
    "lng": 78.41849185612664,
    "report_time": "2026-03-24 11:29:01"
  },
  {
    "id": 124,
    "crime_type": "THEFT",
    "description": "Individual was given a citation.",
    "lat": 17.419601670184495,
    "lng": 78.49834132666909,
    "report_time": "2026-03-18 07:43:01"
  },
  {
    "id": 125,
    "crime_type": "NOISE COMPLAINT",
    "description": "Reported by local shop owner.",
    "lat": 17.398563882373097,
    "lng": 78.50309121007572,
    "report_time": "2026-03-19 00:57:01"
  },
  {
    "id": 126,
    "crime_type": "VANDALISM",
    "description": "CCTV footage requested for review.",
    "lat": 17.375513415023928,
    "lng": 78.52498139093555,
    "report_time": "2026-03-19 04:00:01"
  },
  {
    "id": 127,
    "crime_type": "VANDALISM",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.436301944485336,
    "lng": 78.44840457679129,
    "report_time": "2026-04-08 14:22:01"
  },
  {
    "id": 128,
    "crime_type": "THEFT",
    "description": "Crowd dispersed after warning.",
    "lat": 17.42026166961761,
    "lng": 78.4565753052519,
    "report_time": "2026-03-28 11:35:01"
  },
  {
    "id": 129,
    "crime_type": "VANDALISM",
    "description": "Reported by local shop owner.",
    "lat": 17.42205370157306,
    "lng": 78.52858057295335,
    "report_time": "2026-03-16 08:46:01"
  },
  {
    "id": 130,
    "crime_type": "PUBLIC DISTURBANCE",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.374071568592548,
    "lng": 78.48681635642176,
    "report_time": "2026-04-04 01:02:01"
  },
  {
    "id": 131,
    "crime_type": "THEFT",
    "description": "Reported by local shop owner.",
    "lat": 17.342923930691864,
    "lng": 78.4783490975142,
    "report_time": "2026-04-10 05:50:01"
  },
  {
    "id": 132,
    "crime_type": "TRAFFIC VIOLATION",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.392857442509047,
    "lng": 78.53231735067672,
    "report_time": "2026-03-14 23:34:01"
  },
  {
    "id": 133,
    "crime_type": "NOISE COMPLAINT",
    "description": "CCTV footage requested for review.",
    "lat": 17.4039587935035,
    "lng": 78.42252201328891,
    "report_time": "2026-03-28 20:02:01"
  },
  {
    "id": 134,
    "crime_type": "NOISE COMPLAINT",
    "description": "Reported by local shop owner.",
    "lat": 17.43723604902194,
    "lng": 78.49350325320256,
    "report_time": "2026-03-13 10:52:01"
  },
  {
    "id": 135,
    "crime_type": "TRAFFIC VIOLATION",
    "description": "Crowd dispersed after warning.",
    "lat": 17.360386320234046,
    "lng": 78.42763779159084,
    "report_time": "2026-03-29 08:58:01"
  },
  {
    "id": 136,
    "crime_type": "PUBLIC DISTURBANCE",
    "description": "Crowd dispersed after warning.",
    "lat": 17.396240984282763,
    "lng": 78.47673805696382,
    "report_time": "2026-03-12 06:29:01"
  },
  {
    "id": 137,
    "crime_type": "VANDALISM",
    "description": "CCTV footage requested for review.",
    "lat": 17.4539966424089,
    "lng": 78.46679898164153,
    "report_time": "2026-03-16 11:42:01"
  },
  {
    "id": 138,
    "crime_type": "NOISE COMPLAINT",
    "description": "Minor damage reported.",
    "lat": 17.3999956284512,
    "lng": 78.41625914741836,
    "report_time": "2026-03-16 19:18:01"
  },
  {
    "id": 139,
    "crime_type": "SUSPICIOUS ACTIVITY",
    "description": "Individual was given a citation.",
    "lat": 17.455543870119357,
    "lng": 78.4461057152512,
    "report_time": "2026-04-06 03:52:01"
  },
  {
    "id": 140,
    "crime_type": "ASSAULT",
    "description": "Individual was given a citation.",
    "lat": 17.4039248804365,
    "lng": 78.40719490709976,
    "report_time": "2026-03-23 22:17:01"
  },
  {
    "id": 141,
    "crime_type": "SUSPICIOUS ACTIVITY",
    "description": "Incident logged at local station.",
    "lat": 17.407155883563178,
    "lng": 78.50195404504927,
    "report_time": "2026-03-16 09:33:01"
  },
  {
    "id": 142,
    "crime_type": "TRAFFIC VIOLATION",
    "description": "Minor damage reported.",
    "lat": 17.416528607670823,
    "lng": 78.49719593076732,
    "report_time": "2026-03-12 23:39:01"
  },
  {
    "id": 143,
    "crime_type": "ASSAULT",
    "description": "Crowd dispersed after warning.",
    "lat": 17.45539826551028,
    "lng": 78.55262989585235,
    "report_time": "2026-03-12 01:28:01"
  },
  {
    "id": 144,
    "crime_type": "ASSAULT",
    "description": "Individual was given a citation.",
    "lat": 17.410236777772578,
    "lng": 78.45767015821892,
    "report_time": "2026-03-27 09:29:01"
  },
  {
    "id": 145,
    "crime_type": "VANDALISM",
    "description": "Reported by local shop owner.",
    "lat": 17.393568953288128,
    "lng": 78.54826270849145,
    "report_time": "2026-03-22 00:44:01"
  },
  {
    "id": 146,
    "crime_type": "TRAFFIC VIOLATION",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.407742310798717,
    "lng": 78.50146539359702,
    "report_time": "2026-03-23 11:04:01"
  },
  {
    "id": 147,
    "crime_type": "SUSPICIOUS ACTIVITY",
    "description": "Incident logged at local station.",
    "lat": 17.390617187090417,
    "lng": 78.43869010960793,
    "report_time": "2026-04-02 07:58:01"
  },
  {
    "id": 148,
    "crime_type": "DRUG INCIDENT",
    "description": "Crowd dispersed after warning.",
    "lat": 17.447005391727487,
    "lng": 78.54307154320543,
    "report_time": "2026-03-22 11:57:01"
  },
  {
    "id": 149,
    "crime_type": "TRAFFIC VIOLATION",
    "description": "Individual was given a citation.",
    "lat": 17.457006042242522,
    "lng": 78.52963641111891,
    "report_time": "2026-04-05 07:21:01"
  },
  {
    "id": 150,
    "crime_type": "TRAFFIC VIOLATION",
    "description": "Minor damage reported.",
    "lat": 17.363648982456294,
    "lng": 78.54383188691803,
    "report_time": "2026-03-30 03:41:01"
  },
  {
    "id": 151,
    "crime_type": "ASSAULT",
    "description": "Crowd dispersed after warning.",
    "lat": 17.408836014675344,
    "lng": 78.51450782213378,
    "report_time": "2026-04-07 11:04:01"
  },
  {
    "id": 152,
    "crime_type": "VANDALISM",
    "description": "Crowd dispersed after warning.",
    "lat": 17.428973467541887,
    "lng": 78.54012899297796,
    "report_time": "2026-03-27 11:11:01"
  },
  {
    "id": 153,
    "crime_type": "ASSAULT",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.392223308440435,
    "lng": 78.39648350762472,
    "report_time": "2026-03-22 08:35:01"
  },
  {
    "id": 154,
    "crime_type": "NOISE COMPLAINT",
    "description": "CCTV footage requested for review.",
    "lat": 17.423013999539968,
    "lng": 78.50885536635477,
    "report_time": "2026-03-24 07:45:01"
  },
  {
    "id": 155,
    "crime_type": "NOISE COMPLAINT",
    "description": "Reported by local shop owner.",
    "lat": 17.447505832501076,
    "lng": 78.49405243221231,
    "report_time": "2026-03-25 14:44:01"
  },
  {
    "id": 156,
    "crime_type": "VANDALISM",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.381769882645685,
    "lng": 78.54349133714985,
    "report_time": "2026-03-13 02:49:01"
  },
  {
    "id": 157,
    "crime_type": "VANDALISM",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.452281819912276,
    "lng": 78.52358483773914,
    "report_time": "2026-04-08 13:02:01"
  },
  {
    "id": 158,
    "crime_type": "NOISE COMPLAINT",
    "description": "Individual was given a citation.",
    "lat": 17.42730082589666,
    "lng": 78.41239728224707,
    "report_time": "2026-03-29 10:01:01"
  },
  {
    "id": 159,
    "crime_type": "SUSPICIOUS ACTIVITY",
    "description": "Crowd dispersed after warning.",
    "lat": 17.444696977808537,
    "lng": 78.45198385171989,
    "report_time": "2026-03-22 10:17:01"
  },
  {
    "id": 160,
    "crime_type": "THEFT",
    "description": "Minor damage reported.",
    "lat": 17.350320820931348,
    "lng": 78.40707556302438,
    "report_time": "2026-04-03 23:31:01"
  },
  {
    "id": 161,
    "crime_type": "SUSPICIOUS ACTIVITY",
    "description": "Crowd dispersed after warning.",
    "lat": 17.340056107953437,
    "lng": 78.54667587624036,
    "report_time": "2026-04-03 09:19:01"
  },
  {
    "id": 162,
    "crime_type": "VANDALISM",
    "description": "Minor damage reported.",
    "lat": 17.37131616170265,
    "lng": 78.42687655390507,
    "report_time": "2026-04-10 04:58:01"
  },
  {
    "id": 163,
    "crime_type": "PUBLIC DISTURBANCE",
    "description": "Incident logged at local station.",
    "lat": 17.389665547897767,
    "lng": 78.48385731593115,
    "report_time": "2026-04-06 08:17:01"
  },
  {
    "id": 164,
    "crime_type": "NOISE COMPLAINT",
    "description": "Reported by local shop owner.",
    "lat": 17.35031585940394,
    "lng": 78.55023845315809,
    "report_time": "2026-04-09 04:32:01"
  },
  {
    "id": 165,
    "crime_type": "ASSAULT",
    "description": "Reported by local shop owner.",
    "lat": 17.44695975625065,
    "lng": 78.51975657757515,
    "report_time": "2026-03-15 21:32:01"
  },
  {
    "id": 166,
    "crime_type": "PUBLIC DISTURBANCE",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.430021845754393,
    "lng": 78.4673278004824,
    "report_time": "2026-03-28 13:27:01"
  },
  {
    "id": 167,
    "crime_type": "SUSPICIOUS ACTIVITY",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.40998407288683,
    "lng": 78.40428480458743,
    "report_time": "2026-03-31 08:14:01"
  },
  {
    "id": 168,
    "crime_type": "PUBLIC DISTURBANCE",
    "description": "CCTV footage requested for review.",
    "lat": 17.404339180609536,
    "lng": 78.50961476084647,
    "report_time": "2026-03-17 06:46:01"
  },
  {
    "id": 169,
    "crime_type": "PUBLIC DISTURBANCE",
    "description": "Reported by local shop owner.",
    "lat": 17.356437541150644,
    "lng": 78.5467917638146,
    "report_time": "2026-03-18 02:44:01"
  },
  {
    "id": 170,
    "crime_type": "TRAFFIC VIOLATION",
    "description": "Individual was given a citation.",
    "lat": 17.343887408099533,
    "lng": 78.43114663989476,
    "report_time": "2026-03-14 11:19:01"
  },
  {
    "id": 171,
    "crime_type": "SUSPICIOUS ACTIVITY",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.377269463594512,
    "lng": 78.54299447140288,
    "report_time": "2026-03-27 18:21:01"
  },
  {
    "id": 172,
    "crime_type": "DRUG INCIDENT",
    "description": "Crowd dispersed after warning.",
    "lat": 17.454157293958353,
    "lng": 78.55421565615487,
    "report_time": "2026-04-06 05:15:01"
  },
  {
    "id": 173,
    "crime_type": "THEFT",
    "description": "Crowd dispersed after warning.",
    "lat": 17.410263587552873,
    "lng": 78.49826420371018,
    "report_time": "2026-03-20 11:42:01"
  },
  {
    "id": 174,
    "crime_type": "TRAFFIC VIOLATION",
    "description": "CCTV footage requested for review.",
    "lat": 17.41867672132092,
    "lng": 78.45335560316826,
    "report_time": "2026-03-23 07:07:01"
  },
  {
    "id": 175,
    "crime_type": "VANDALISM",
    "description": "Minor damage reported.",
    "lat": 17.444847457960293,
    "lng": 78.5494736278215,
    "report_time": "2026-04-10 07:42:01"
  },
  {
    "id": 176,
    "crime_type": "THEFT",
    "description": "Crowd dispersed after warning.",
    "lat": 17.455634424400216,
    "lng": 78.46773421014842,
    "report_time": "2026-03-16 20:03:01"
  },
  {
    "id": 177,
    "crime_type": "ASSAULT",
    "description": "Reported by local shop owner.",
    "lat": 17.36848583828478,
    "lng": 78.54716296052591,
    "report_time": "2026-03-13 07:55:01"
  },
  {
    "id": 178,
    "crime_type": "VANDALISM",
    "description": "Incident logged at local station.",
    "lat": 17.364044703184096,
    "lng": 78.51328185757109,
    "report_time": "2026-03-12 07:04:01"
  },
  {
    "id": 179,
    "crime_type": "PUBLIC DISTURBANCE",
    "description": "Individual was given a citation.",
    "lat": 17.384068734066812,
    "lng": 78.5055342015641,
    "report_time": "2026-03-25 09:01:01"
  },
  {
    "id": 180,
    "crime_type": "VANDALISM",
    "description": "CCTV footage requested for review.",
    "lat": 17.366622111923096,
    "lng": 78.49885653875826,
    "report_time": "2026-03-25 01:24:01"
  },
  {
    "id": 181,
    "crime_type": "VANDALISM",
    "description": "Minor damage reported.",
    "lat": 17.435897150092735,
    "lng": 78.5520051927119,
    "report_time": "2026-04-07 12:47:01"
  },
  {
    "id": 182,
    "crime_type": "SUSPICIOUS ACTIVITY",
    "description": "Crowd dispersed after warning.",
    "lat": 17.34968175369261,
    "lng": 78.55100287051592,
    "report_time": "2026-03-20 09:49:01"
  },
  {
    "id": 183,
    "crime_type": "TRAFFIC VIOLATION",
    "description": "Incident logged at local station.",
    "lat": 17.350125338334514,
    "lng": 78.49152062552788,
    "report_time": "2026-04-10 16:45:01"
  },
  {
    "id": 184,
    "crime_type": "DRUG INCIDENT",
    "description": "Reported by local shop owner.",
    "lat": 17.441355159851675,
    "lng": 78.47509583658734,
    "report_time": "2026-04-05 04:02:01"
  },
  {
    "id": 185,
    "crime_type": "THEFT",
    "description": "Individual was given a citation.",
    "lat": 17.39750065393755,
    "lng": 78.4763688898853,
    "report_time": "2026-03-26 03:34:01"
  },
  {
    "id": 186,
    "crime_type": "THEFT",
    "description": "Crowd dispersed after warning.",
    "lat": 17.38962159291375,
    "lng": 78.46086923136698,
    "report_time": "2026-03-13 15:40:01"
  },
  {
    "id": 187,
    "crime_type": "PUBLIC DISTURBANCE",
    "description": "Incident logged at local station.",
    "lat": 17.379188401317297,
    "lng": 78.54790069913084,
    "report_time": "2026-04-08 18:01:01"
  },
  {
    "id": 188,
    "crime_type": "TRAFFIC VIOLATION",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.340366738508813,
    "lng": 78.47482695459821,
    "report_time": "2026-04-02 17:10:01"
  },
  {
    "id": 189,
    "crime_type": "NOISE COMPLAINT",
    "description": "Reported by local shop owner.",
    "lat": 17.437550981022053,
    "lng": 78.43390769083655,
    "report_time": "2026-03-31 23:25:01"
  },
  {
    "id": 190,
    "crime_type": "VANDALISM",
    "description": "Incident logged at local station.",
    "lat": 17.34484435451739,
    "lng": 78.4749729577426,
    "report_time": "2026-03-26 13:21:01"
  },
  {
    "id": 191,
    "crime_type": "TRAFFIC VIOLATION",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.340676848235134,
    "lng": 78.46443194692527,
    "report_time": "2026-04-09 00:41:01"
  },
  {
    "id": 192,
    "crime_type": "THEFT",
    "description": "Individual was given a citation.",
    "lat": 17.436018038106674,
    "lng": 78.49275441035252,
    "report_time": "2026-03-14 14:15:01"
  },
  {
    "id": 193,
    "crime_type": "PUBLIC DISTURBANCE",
    "description": "Individual was given a citation.",
    "lat": 17.446079494118706,
    "lng": 78.53029022640911,
    "report_time": "2026-03-13 07:49:01"
  },
  {
    "id": 194,
    "crime_type": "TRAFFIC VIOLATION",
    "description": "Crowd dispersed after warning.",
    "lat": 17.439786681350636,
    "lng": 78.49307837938984,
    "report_time": "2026-03-11 16:21:01"
  },
  {
    "id": 195,
    "crime_type": "THEFT",
    "description": "Individual was given a citation.",
    "lat": 17.450300760630768,
    "lng": 78.49523637250486,
    "report_time": "2026-03-31 12:57:01"
  },
  {
    "id": 196,
    "crime_type": "VANDALISM",
    "description": "Crowd dispersed after warning.",
    "lat": 17.353757660347142,
    "lng": 78.46261629765795,
    "report_time": "2026-04-03 03:17:01"
  },
  {
    "id": 197,
    "crime_type": "TRAFFIC VIOLATION",
    "description": "Minor damage reported.",
    "lat": 17.370463008948853,
    "lng": 78.44132980584304,
    "report_time": "2026-04-08 15:11:01"
  },
  {
    "id": 198,
    "crime_type": "PUBLIC DISTURBANCE",
    "description": "Incident logged at local station.",
    "lat": 17.369646007515282,
    "lng": 78.43714463740628,
    "report_time": "2026-04-09 07:43:01"
  },
  {
    "id": 199,
    "crime_type": "VANDALISM",
    "description": "Incident logged at local station.",
    "lat": 17.45019621651284,
    "lng": 78.41801989109648,
    "report_time": "2026-04-07 15:44:01"
  },
  {
    "id": 200,
    "crime_type": "ASSAULT",
    "description": "Minor damage reported.",
    "lat": 17.379269620804905,
    "lng": 78.40833029448743,
    "report_time": "2026-03-15 21:48:01"
  },
  {
    "id": 201,
    "crime_type": "DRUG INCIDENT",
    "description": "Resolved on scene by patrol officers.",
    "lat": 17.409386518513877,
    "lng": 78.53435105152376,
    "report_time": "2026-04-05 21:53:01"
  },
  {
    "id": 202,
    "crime_type": "THEFT",
    "description": "CCTV footage requested for review.",
    "lat": 17.419070805710966,
    "lng": 78.44312768711113,
    "report_time": "2026-03-17 15:47:01"
  },
  {
    "id": 203,
    "crime_type": "TRAFFIC VIOLATION",
    "description": "Crowd dispersed after warning.",
    "lat": 17.384120100516316,
    "lng": 78.43174749422028,
    "report_time": "2026-03-16 03:05:01"
  },
  {
    "id": 204,
    "crime_type": "SUSPICIOUS ACTIVITY",
    "description": "Individual was given a citation.",
    "lat": 17.402723987216344,
    "lng": 78.52702426764246,
    "report_time": "2026-03-15 23:50:01"
  },
  {
    "id": 205,
    "crime_type": "NOISE COMPLAINT",
    "description": "CCTV footage requested for review.",
    "lat": 17.41258433715428,
    "lng": 78.50174127005502,
    "report_time": "2026-03-22 17:33:01"
  }
];
