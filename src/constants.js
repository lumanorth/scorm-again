// @flow
import {scorm2004_regex} from "./regex";

export const base_error_codes = {
    GENERAL: 101,
    INITIALIZATION_FAILED: 101,
    INITIALIZED: 101,
    TERMINATED: 101,
    TERMINATION_FAILURE: 101,
    TERMINATION_BEFORE_INIT: 101,
    MULTIPLE_TERMINATION: 101,
    RETRIEVE_BEFORE_INIT: 101,
    RETRIEVE_AFTER_TERM: 101,
    STORE_BEFORE_INIT: 101,
    STORE_AFTER_TERM: 101,
    COMMIT_BEFORE_INIT: 101,
    COMMIT_AFTER_TERM: 101,
    ARGUMENT_ERROR: 101,
    CHILDREN_ERROR: 101,
    COUNT_ERROR: 101,
    GENERAL_GET_FAILURE: 101,
    GENERAL_SET_FAILURE: 101,
    GENERAL_COMMIT_FAILURE: 101,
    UNDEFINED_DATA_MODEL: 101,
    UNIMPLEMENTED_ELEMENT: 101,
    VALUE_NOT_INITIALIZED: 101,
    INVALID_SET_VALUE: 101,
    READ_ONLY_ELEMENT: 101,
    WRITE_ONLY_ELEMENT: 101,
    TYPE_MISMATCH: 101,
    VALUE_OUT_OF_RANGE: 101,
    DEPENDENCY_NOT_ESTABLISHED: 101
};

export const scorm12_error_codes = {
    ...base_error_codes, ...{
        RETRIEVE_BEFORE_INIT: 301,
        STORE_BEFORE_INIT: 301,
        COMMIT_BEFORE_INIT: 301,
        ARGUMENT_ERROR: 201,
        CHILDREN_ERROR: 202,
        COUNT_ERROR: 203,
        UNDEFINED_DATA_MODEL: 401,
        UNIMPLEMENTED_ELEMENT: 401,
        VALUE_NOT_INITIALIZED: 301,
        INVALID_SET_VALUE: 402,
        READ_ONLY_ELEMENT: 403,
        WRITE_ONLY_ELEMENT: 404,
        TYPE_MISMATCH: 405,
        VALUE_OUT_OF_RANGE: 407,
        DEPENDENCY_NOT_ESTABLISHED: 408
    }
};

export const scorm2004_error_codes = {
    ...base_error_codes, ...{
        INITIALIZATION_FAILED: 102,
        INITIALIZED: 103,
        TERMINATED: 104,
        TERMINATION_FAILURE: 111,
        TERMINATION_BEFORE_INIT: 112,
        MULTIPLE_TERMINATIONS: 113,
        RETRIEVE_BEFORE_INIT: 122,
        RETRIEVE_AFTER_TERM: 123,
        STORE_BEFORE_INIT: 132,
        STORE_AFTER_TERM: 133,
        COMMIT_BEFORE_INIT: 142,
        COMMIT_AFTER_TERM: 143,
        ARGUMENT_ERROR: 201,
        GENERAL_GET_FAILURE: 301,
        GENERAL_SET_FAILURE: 351,
        GENERAL_COMMIT_FAILURE: 391,
        UNDEFINED_DATA_MODEL: 401,
        UNIMPLEMENTED_ELEMENT: 402,
        VALUE_NOT_INITIALIZED: 403,
        READ_ONLY_ELEMENT: 404,
        WRITE_ONLY_ELEMENT: 405,
        TYPE_MISMATCH: 406,
        VALUE_OUT_OF_RANGE: 407,
        DEPENDENCY_NOT_ESTABLISHED: 408
    }
};

export const scorm12_constants = {
    // Children lists
    cmi_children: 'core,suspend_data,launch_data,comments,objectives,student_data,student_preference,interactions',
    core_children: 'student_id,student_name,lesson_location,credit,lesson_status,entry,score,total_time,lesson_mode,exit,session_time',
    score_children: 'raw,min,max',
    comments_children: 'content,location,time',
    objectives_children: 'id,score,status',
    correct_responses_children: 'pattern',
    student_data_children: 'mastery_score,max_time_allowed,time_limit_action',
    student_preference_children: 'audio,language,speed,text',
    interactions_children: 'id,objectives,time,type,correct_responses,weighting,student_response,result,latency',

    error_descriptions: {
        "101": {
            basicMessage: "General Exception",
            detailMessage: "No specific error code exists to describe the error. Use LMSGetDiagnostic for more information",
        },
        "201": {
            basicMessage: "Invalid argument error",
            detailMessage: "Indicates that an argument represents an invalid data model element or is otherwise incorrect.",
        },
        "202": {
            basicMessage: "Element cannot have children",
            detailMessage: "Indicates that LMSGetValue was called with a data model element name that ends in \"_children\" for a data model element that does not support the \"_children\" suffix.",
        },
        "203": {
            basicMessage: "Element not an array - cannot have count",
            detailMessage: "Indicates that LMSGetValue was called with a data model element name that ends in \"_count\" for a data model element that does not support the \"_count\" suffix.",
        },
        "301": {
            basicMessage: "Not initialized",
            detailMessage: "Indicates that an API call was made before the call to LMSInitialize.",
        },
        "401": {
            basicMessage: "Not implemented error",
            detailMessage: "The data model element indicated in a call to LMSGetValue or LMSSetValue is valid, but was not implemented by this LMS. SCORM 1.2 defines a set of data model elements as being optional for an LMS to implement.",
        },
        "402": {
            basicMessage: "Invalid set value, element is a keyword",
            detailMessage: "Indicates that LMSSetValue was called on a data model element that represents a keyword (elements that end in \"_children\" and \"_count\").",
        },
        "403": {
            basicMessage: "Element is read only",
            detailMessage: "LMSSetValue was called with a data model element that can only be read.",
        },
        "404": {
            basicMessage: "Element is write only",
            detailMessage: "LMSGetValue was called on a data model element that can only be written to.",
        },
        "405": {
            basicMessage: "Incorrect Data Type",
            detailMessage: "LMSSetValue was called with a value that is not consistent with the data format of the supplied data model element.",
        }
    }
};

export const aicc_constants = {
    ...scorm12_constants, ...{
        cmi_children: 'core,suspend_data,launch_data,comments,objectives,student_data,student_preference,interactions,evaluation',
        student_data_children: 'attempt_number,tries,mastery_score,max_time_allowed,time_limit_action',
        tries_children: "time,status,score"
    }
};

export const scorm2004_constants = {
    // Children lists
    cmi_children: '_version,comments_from_learner,comments_from_lms,completion_status,credit,entry,exit,interactions,launch_data,learner_id,learner_name,learner_preference,location,max_time_allowed,mode,objectives,progress_measure,scaled_passing_score,score,session_time,success_status,suspend_data,time_limit_action,total_time',
    comments_children: 'comment,timestamp,location',
    score_children: 'max,raw,scaled,min',
    objectives_children: 'progress_measure,completion_status,success_status,description,score,id',
    correct_responses_children: 'pattern',
    student_data_children: 'mastery_score,max_time_allowed,time_limit_action',
    student_preference_children: 'audio_level,audio_captioning,delivery_speed,language',
    interactions_children: 'id,type,objectives,timestamp,correct_responses,weighting,learner_response,result,latency,description',

    error_descriptions: {
        "0": {
            basicMessage: "No Error",
            detailMessage: "No error occurred, the previous API call was successful.",
        },
        "101": {
            basicMessage: "General Exception",
            detailMessage: "No specific error code exists to describe the error. Use GetDiagnostic for more information.",
        },
        "102": {
            basicMessage: "General Initialization Failure",
            detailMessage: "Call to Initialize failed for an unknown reason.",
        },
        "103": {
            basicMessage: "Already Initialized",
            detailMessage: "Call to Initialize failed because Initialize was already called.",
        },
        "104": {
            basicMessage: "Content Instance Terminated",
            detailMessage: "Call to Initialize failed because Terminate was already called.",
        },
        "111": {
            basicMessage: "General Termination Failure",
            detailMessage: "Call to Terminate failed for an unknown reason.",
        },
        "112": {
            basicMessage: "Termination Before Initialization",
            detailMessage: "Call to Terminate failed because it was made before the call to Initialize.",
        },
        "113": {
            basicMessage: "Termination After Termination",
            detailMessage: "Call to Terminate failed because Terminate was already called.",
        },
        "122": {
            basicMessage: "Retrieve Data Before Initialization",
            detailMessage: "Call to GetValue failed because it was made before the call to Initialize.",
        },
        "123": {
            basicMessage: "Retrieve Data After Termination",
            detailMessage: "Call to GetValue failed because it was made after the call to Terminate.",
        },
        "132": {
            basicMessage: "Store Data Before Initialization",
            detailMessage: "Call to SetValue failed because it was made before the call to Initialize.",
        },
        "133": {
            basicMessage: "Store Data After Termination",
            detailMessage: "Call to SetValue failed because it was made after the call to Terminate.",
        },
        "142": {
            basicMessage: "Commit Before Initialization",
            detailMessage: "Call to Commit failed because it was made before the call to Initialize.",
        },
        "143": {
            basicMessage: "Commit After Termination",
            detailMessage: "Call to Commit failed because it was made after the call to Terminate.",
        },
        "201": {
            basicMessage: "General Argument Error",
            detailMessage: "An invalid argument was passed to an API method (usually indicates that Initialize, Commit or Terminate did not receive the expected empty string argument.",
        },
        "301": {
            basicMessage: "General Get Failure",
            detailMessage: "Indicates a failed GetValue call where no other specific error code is applicable. Use GetDiagnostic for more information.",
        },
        "351": {
            basicMessage: "General Set Failure",
            detailMessage: "Indicates a failed SetValue call where no other specific error code is applicable. Use GetDiagnostic for more information.",
        },
        "391": {
            basicMessage: "General Commit Failure",
            detailMessage: "Indicates a failed Commit call where no other specific error code is applicable. Use GetDiagnostic for more information.",
        },
        "401": {
            basicMessage: "Undefined Data Model Element",
            detailMessage: "The data model element name passed to GetValue or SetValue is not a valid SCORM data model element.",
        },
        "402": {
            basicMessage: "Unimplemented Data Model Element",
            detailMessage: "The data model element indicated in a call to GetValue or SetValue is valid, but was not implemented by this LMS. In SCORM 2004, this error would indicate an LMS that is not fully SCORM conformant.",
        },
        "403": {
            basicMessage: "Data Model Element Value Not Initialized",
            detailMessage: "Attempt to read a data model element that has not been initialized by the LMS or through a SetValue call. This error condition is often reached during normal execution of a SCO.",
        },
        "404": {
            basicMessage: "Data Model Element Is Read Only",
            detailMessage: "SetValue was called with a data model element that can only be read.",
        },
        "405": {
            basicMessage: "Data Model Element Is Write Only",
            detailMessage: "GetValue was called on a data model element that can only be written to.",
        },
        "406": {
            basicMessage: "Data Model Element Type Mismatch",
            detailMessage: "SetValue was called with a value that is not consistent with the data format of the supplied data model element.",
        },
        "407": {
            basicMessage: "Data Model Element Value Out Of Range",
            detailMessage: "The numeric value supplied to a SetValue call is outside of the numeric range allowed for the supplied data model element.",
        },
        "408": {
            basicMessage: "Data Model Dependency Not Established",
            detailMessage: "Some data model elements cannot be set until another data model element was set. This error condition indicates that the prerequisite element was not set before the dependent element.",
        }
    },

    valid_languages: {
        'aa': 'aa',
        'ab': 'ab',
        'ae': 'ae',
        'af': 'af',
        'ak': 'ak',
        'am': 'am',
        'an': 'an',
        'ar': 'ar',
        'as': 'as',
        'av': 'av',
        'ay': 'ay',
        'az': 'az',
        'ba': 'ba',
        'be': 'be',
        'bg': 'bg',
        'bh': 'bh',
        'bi': 'bi',
        'bm': 'bm',
        'bn': 'bn',
        'bo': 'bo',
        'br': 'br',
        'bs': 'bs',
        'ca': 'ca',
        'ce': 'ce',
        'ch': 'ch',
        'co': 'co',
        'cr': 'cr',
        'cs': 'cs',
        'cu': 'cu',
        'cv': 'cv',
        'cy': 'cy',
        'da': 'da',
        'de': 'de',
        'dv': 'dv',
        'dz': 'dz',
        'ee': 'ee',
        'el': 'el',
        'en': 'en',
        'eo': 'eo',
        'es': 'es',
        'et': 'et',
        'eu': 'eu',
        'fa': 'fa',
        'ff': 'ff',
        'fi': 'fi',
        'fj': 'fj',
        'fo': 'fo',
        'fr': 'fr',
        'fy': 'fy',
        'ga': 'ga',
        'gd': 'gd',
        'gl': 'gl',
        'gn': 'gn',
        'gu': 'gu',
        'gv': 'gv',
        'ha': 'ha',
        'he': 'he',
        'hi': 'hi',
        'ho': 'ho',
        'hr': 'hr',
        'ht': 'ht',
        'hu': 'hu',
        'hy': 'hy',
        'hz': 'hz',
        'ia': 'ia',
        'id': 'id',
        'ie': 'ie',
        'ig': 'ig',
        'ii': 'ii',
        'ik': 'ik',
        'io': 'io',
        'is': 'is',
        'it': 'it',
        'iu': 'iu',
        'ja': 'ja',
        'jv': 'jv',
        'ka': 'ka',
        'kg': 'kg',
        'ki': 'ki',
        'kj': 'kj',
        'kk': 'kk',
        'kl': 'kl',
        'km': 'km',
        'kn': 'kn',
        'ko': 'ko',
        'kr': 'kr',
        'ks': 'ks',
        'ku': 'ku',
        'kv': 'kv',
        'kw': 'kw',
        'ky': 'ky',
        'la': 'la',
        'lb': 'lb',
        'lg': 'lg',
        'li': 'li',
        'ln': 'ln',
        'lo': 'lo',
        'lt': 'lt',
        'lu': 'lu',
        'lv': 'lv',
        'mg': 'mg',
        'mh': 'mh',
        'mi': 'mi',
        'mk': 'mk',
        'ml': 'ml',
        'mn': 'mn',
        'mo': 'mo',
        'mr': 'mr',
        'ms': 'ms',
        'mt': 'mt',
        'my': 'my',
        'na': 'na',
        'nb': 'nb',
        'nd': 'nd',
        'ne': 'ne',
        'ng': 'ng',
        'nl': 'nl',
        'nn': 'nn',
        'no': 'no',
        'nr': 'nr',
        'nv': 'nv',
        'ny': 'ny',
        'oc': 'oc',
        'oj': 'oj',
        'om': 'om',
        'or': 'or',
        'os': 'os',
        'pa': 'pa',
        'pi': 'pi',
        'pl': 'pl',
        'ps': 'ps',
        'pt': 'pt',
        'qu': 'qu',
        'rm': 'rm',
        'rn': 'rn',
        'ro': 'ro',
        'ru': 'ru',
        'rw': 'rw',
        'sa': 'sa',
        'sc': 'sc',
        'sd': 'sd',
        'se': 'se',
        'sg': 'sg',
        'sh': 'sh',
        'si': 'si',
        'sk': 'sk',
        'sl': 'sl',
        'sm': 'sm',
        'sn': 'sn',
        'so': 'so',
        'sq': 'sq',
        'sr': 'sr',
        'ss': 'ss',
        'st': 'st',
        'su': 'su',
        'sv': 'sv',
        'sw': 'sw',
        'ta': 'ta',
        'te': 'te',
        'tg': 'tg',
        'th': 'th',
        'ti': 'ti',
        'tk': 'tk',
        'tl': 'tl',
        'tn': 'tn',
        'to': 'to',
        'tr': 'tr',
        'ts': 'ts',
        'tt': 'tt',
        'tw': 'tw',
        'ty': 'ty',
        'ug': 'ug',
        'uk': 'uk',
        'ur': 'ur',
        'uz': 'uz',
        've': 've',
        'vi': 'vi',
        'vo': 'vo',
        'wa': 'wa',
        'wo': 'wo',
        'xh': 'xh',
        'yi': 'yi',
        'yo': 'yo',
        'za': 'za',
        'zh': 'zh',
        'zu': 'zu',
        'aar': 'aar',
        'abk': 'abk',
        'ave': 'ave',
        'afr': 'afr',
        'aka': 'aka',
        'amh': 'amh',
        'arg': 'arg',
        'ara': 'ara',
        'asm': 'asm',
        'ava': 'ava',
        'aym': 'aym',
        'aze': 'aze',
        'bak': 'bak',
        'bel': 'bel',
        'bul': 'bul',
        'bih': 'bih',
        'bis': 'bis',
        'bam': 'bam',
        'ben': 'ben',
        'tib': 'tib',
        'bod': 'bod',
        'bre': 'bre',
        'bos': 'bos',
        'cat': 'cat',
        'che': 'che',
        'cha': 'cha',
        'cos': 'cos',
        'cre': 'cre',
        'cze': 'cze',
        'ces': 'ces',
        'chu': 'chu',
        'chv': 'chv',
        'wel': 'wel',
        'cym': 'cym',
        'dan': 'dan',
        'ger': 'ger',
        'deu': 'deu',
        'div': 'div',
        'dzo': 'dzo',
        'ewe': 'ewe',
        'gre': 'gre',
        'ell': 'ell',
        'eng': 'eng',
        'epo': 'epo',
        'spa': 'spa',
        'est': 'est',
        'baq': 'baq',
        'eus': 'eus',
        'per': 'per',
        'fas': 'fas',
        'ful': 'ful',
        'fin': 'fin',
        'fij': 'fij',
        'fao': 'fao',
        'fre': 'fre',
        'fra': 'fra',
        'fry': 'fry',
        'gle': 'gle',
        'gla': 'gla',
        'glg': 'glg',
        'grn': 'grn',
        'guj': 'guj',
        'glv': 'glv',
        'hau': 'hau',
        'heb': 'heb',
        'hin': 'hin',
        'hmo': 'hmo',
        'hrv': 'hrv',
        'hat': 'hat',
        'hun': 'hun',
        'arm': 'arm',
        'hye': 'hye',
        'her': 'her',
        'ina': 'ina',
        'ind': 'ind',
        'ile': 'ile',
        'ibo': 'ibo',
        'iii': 'iii',
        'ipk': 'ipk',
        'ido': 'ido',
        'ice': 'ice',
        'isl': 'isl',
        'ita': 'ita',
        'iku': 'iku',
        'jpn': 'jpn',
        'jav': 'jav',
        'geo': 'geo',
        'kat': 'kat',
        'kon': 'kon',
        'kik': 'kik',
        'kua': 'kua',
        'kaz': 'kaz',
        'kal': 'kal',
        'khm': 'khm',
        'kan': 'kan',
        'kor': 'kor',
        'kau': 'kau',
        'kas': 'kas',
        'kur': 'kur',
        'kom': 'kom',
        'cor': 'cor',
        'kir': 'kir',
        'lat': 'lat',
        'ltz': 'ltz',
        'lug': 'lug',
        'lim': 'lim',
        'lin': 'lin',
        'lao': 'lao',
        'lit': 'lit',
        'lub': 'lub',
        'lav': 'lav',
        'mlg': 'mlg',
        'mah': 'mah',
        'mao': 'mao',
        'mri': 'mri',
        'mac': 'mac',
        'mkd': 'mkd',
        'mal': 'mal',
        'mon': 'mon',
        'mol': 'mol',
        'mar': 'mar',
        'may': 'may',
        'msa': 'msa',
        'mlt': 'mlt',
        'bur': 'bur',
        'mya': 'mya',
        'nau': 'nau',
        'nob': 'nob',
        'nde': 'nde',
        'nep': 'nep',
        'ndo': 'ndo',
        'dut': 'dut',
        'nld': 'nld',
        'nno': 'nno',
        'nor': 'nor',
        'nbl': 'nbl',
        'nav': 'nav',
        'nya': 'nya',
        'oci': 'oci',
        'oji': 'oji',
        'orm': 'orm',
        'ori': 'ori',
        'oss': 'oss',
        'pan': 'pan',
        'pli': 'pli',
        'pol': 'pol',
        'pus': 'pus',
        'por': 'por',
        'que': 'que',
        'roh': 'roh',
        'run': 'run',
        'rum': 'rum',
        'ron': 'ron',
        'rus': 'rus',
        'kin': 'kin',
        'san': 'san',
        'srd': 'srd',
        'snd': 'snd',
        'sme': 'sme',
        'sag': 'sag',
        'slo': 'slo',
        'sin': 'sin',
        'slk': 'slk',
        'slv': 'slv',
        'smo': 'smo',
        'sna': 'sna',
        'som': 'som',
        'alb': 'alb',
        'sqi': 'sqi',
        'srp': 'srp',
        'ssw': 'ssw',
        'sot': 'sot',
        'sun': 'sun',
        'swe': 'swe',
        'swa': 'swa',
        'tam': 'tam',
        'tel': 'tel',
        'tgk': 'tgk',
        'tha': 'tha',
        'tir': 'tir',
        'tuk': 'tuk',
        'tgl': 'tgl',
        'tsn': 'tsn',
        'ton': 'ton',
        'tur': 'tur',
        'tso': 'tso',
        'tat': 'tat',
        'twi': 'twi',
        'tah': 'tah',
        'uig': 'uig',
        'ukr': 'ukr',
        'urd': 'urd',
        'uzb': 'uzb',
        'ven': 'ven',
        'vie': 'vie',
        'vol': 'vol',
        'wln': 'wln',
        'wol': 'wol',
        'xho': 'xho',
        'yid': 'yid',
        'yor': 'yor',
        'zha': 'zha',
        'chi': 'chi',
        'zho': 'zho',
        'zul': 'zul'
    }
};

export const learner_responses = {
    'true-false': {
        format: '^true$|^false$',
            max: 1,
            delimiter: '',
            unique: false
    },
    'choice': {
        format: scorm2004_regex.CMIShortIdentifier,
            max: 36,
            delimiter: '[,]',
            unique: true
    },
    'fill-in': {
        format: scorm2004_regex.CMILangString250,
            max: 10,
            delimiter: '[,]',
            unique: false
    },
    'long-fill-in': {
        format: scorm2004_regex.CMILangString4000,
            max: 1,
            delimiter: '',
            unique: false
    },
    'matching': {
        format: scorm2004_regex.CMIShortIdentifier,
            format2: scorm2004_regex.CMIShortIdentifier,
            max: 36,
            delimiter: '[,]',
            delimiter2: '[.]',
            unique: false
    },
    'performance': {
        format: '^$|' + scorm2004_regex.CMIShortIdentifier,
            format2: scorm2004_regex.CMIDecimal + '|^$|' + scorm2004_regex.CMIShortIdentifier,
            max: 250,
            delimiter: '[,]',
            delimiter2: '[.]',
            unique: false
    },
    'sequencing': {
        format: scorm2004_regex.CMIShortIdentifier,
            max: 36,
            delimiter: '[,]',
            unique: false
    },
    'likert': {
        format: scorm2004_regex.CMIShortIdentifier,
            max: 1,
            delimiter: '',
            unique: false
    },
    'numeric': {
        format: scorm2004_regex.CMIDecimal,
            max: 1,
            delimiter: '',
            unique: false
    },
    'other': {
        format: scorm2004_regex.CMIString4000,
            max: 1,
            delimiter: '',
            unique: false
    }
};

export const correct_responses = {
    'true-false': {
        max: 1,
        delimiter: '',
        unique: false,
        duplicate: false,
        format: '^true$|^false$',
        limit: 1
    },
    'choice': {
        max: 36,
        delimiter: '[,]',
        unique: true,
        duplicate: false,
        format: scorm2004_regex.CMIShortIdentifier
    },
    'fill-in': {
        max: 10,
        delimiter: '[,]',
        unique: false,
        duplicate: false,
        format: scorm2004_regex.CMILangString250cr
    },
    'long-fill-in': {
        max: 1,
        delimiter: '',
        unique: false,
        duplicate: true,
        format: scorm2004_regex.CMILangString4000
    },
    'matching': {
        max: 36,
        delimiter: '[,]',
        delimiter2: '[.]',
        unique: false,
        duplicate: false,
        format: scorm2004_regex.CMIShortIdentifier,
        format2: scorm2004_regex.CMIShortIdentifier
    },
    'performance': {
        max: 250,
        delimiter: '[,]',
        delimiter2: '[.]',
        unique: false,
        duplicate: false,
        format: '^$|' + scorm2004_regex.CMIShortIdentifier,
        format2: scorm2004_regex.CMIDecimal + '|^$|' + scorm2004_regex.CMIShortIdentifier
    },
    'sequencing': {
        max: 36,
        delimiter: '[,]',
        unique: false,
        duplicate: false,
        format: scorm2004_regex.CMIShortIdentifier
    },
    'likert': {
        max: 1,
        delimiter: '',
        unique: false,
        duplicate: false,
        format: scorm2004_regex.CMIShortIdentifier,
        limit: 1
    },
    'numeric': {
        max: 2,
        delimiter: '[:]',
        unique: false,
        duplicate: false,
        format: scorm2004_regex.CMIDecimal,
        limit: 1
    },
    'other': {
        max: 1,
        delimiter: '',
        unique: false,
        duplicate: false,
        format: scorm2004_regex.CMIString4000,
        limit: 1
    }
};