/** Domain helper module 3 - ML platform support */
function helper3_0(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_0(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_0(input[k], opts);
    return o;
  }
  return input;
}

function helper3_1(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_1(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_1(input[k], opts);
    return o;
  }
  return input;
}

function helper3_2(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_2(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_2(input[k], opts);
    return o;
  }
  return input;
}

function helper3_3(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_3(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_3(input[k], opts);
    return o;
  }
  return input;
}

function helper3_4(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_4(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_4(input[k], opts);
    return o;
  }
  return input;
}

function helper3_5(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_5(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_5(input[k], opts);
    return o;
  }
  return input;
}

function helper3_6(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_6(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_6(input[k], opts);
    return o;
  }
  return input;
}

function helper3_7(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_7(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_7(input[k], opts);
    return o;
  }
  return input;
}

function helper3_8(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_8(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_8(input[k], opts);
    return o;
  }
  return input;
}

function helper3_9(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_9(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_9(input[k], opts);
    return o;
  }
  return input;
}

function helper3_10(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_10(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_10(input[k], opts);
    return o;
  }
  return input;
}

function helper3_11(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_11(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_11(input[k], opts);
    return o;
  }
  return input;
}

function helper3_12(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_12(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_12(input[k], opts);
    return o;
  }
  return input;
}

function helper3_13(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_13(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_13(input[k], opts);
    return o;
  }
  return input;
}

function helper3_14(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_14(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_14(input[k], opts);
    return o;
  }
  return input;
}

function helper3_15(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_15(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_15(input[k], opts);
    return o;
  }
  return input;
}

function helper3_16(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_16(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_16(input[k], opts);
    return o;
  }
  return input;
}

function helper3_17(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_17(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_17(input[k], opts);
    return o;
  }
  return input;
}

function helper3_18(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_18(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_18(input[k], opts);
    return o;
  }
  return input;
}

function helper3_19(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_19(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_19(input[k], opts);
    return o;
  }
  return input;
}

function helper3_20(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_20(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_20(input[k], opts);
    return o;
  }
  return input;
}

function helper3_21(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_21(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_21(input[k], opts);
    return o;
  }
  return input;
}

function helper3_22(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_22(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_22(input[k], opts);
    return o;
  }
  return input;
}

function helper3_23(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_23(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_23(input[k], opts);
    return o;
  }
  return input;
}

function helper3_24(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_24(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_24(input[k], opts);
    return o;
  }
  return input;
}

function helper3_25(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_25(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_25(input[k], opts);
    return o;
  }
  return input;
}

function helper3_26(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_26(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_26(input[k], opts);
    return o;
  }
  return input;
}

function helper3_27(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_27(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_27(input[k], opts);
    return o;
  }
  return input;
}

function helper3_28(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_28(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_28(input[k], opts);
    return o;
  }
  return input;
}

function helper3_29(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_29(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_29(input[k], opts);
    return o;
  }
  return input;
}

function helper3_30(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_30(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_30(input[k], opts);
    return o;
  }
  return input;
}

function helper3_31(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_31(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_31(input[k], opts);
    return o;
  }
  return input;
}

function helper3_32(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_32(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_32(input[k], opts);
    return o;
  }
  return input;
}

function helper3_33(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_33(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_33(input[k], opts);
    return o;
  }
  return input;
}

function helper3_34(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_34(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_34(input[k], opts);
    return o;
  }
  return input;
}

function helper3_35(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_35(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_35(input[k], opts);
    return o;
  }
  return input;
}

function helper3_36(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_36(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_36(input[k], opts);
    return o;
  }
  return input;
}

function helper3_37(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_37(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_37(input[k], opts);
    return o;
  }
  return input;
}

function helper3_38(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_38(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_38(input[k], opts);
    return o;
  }
  return input;
}

function helper3_39(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_39(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_39(input[k], opts);
    return o;
  }
  return input;
}

function helper3_40(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_40(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_40(input[k], opts);
    return o;
  }
  return input;
}

function helper3_41(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_41(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_41(input[k], opts);
    return o;
  }
  return input;
}

function helper3_42(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_42(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_42(input[k], opts);
    return o;
  }
  return input;
}

function helper3_43(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_43(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_43(input[k], opts);
    return o;
  }
  return input;
}

function helper3_44(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_44(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_44(input[k], opts);
    return o;
  }
  return input;
}

function helper3_45(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_45(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_45(input[k], opts);
    return o;
  }
  return input;
}

function helper3_46(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_46(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_46(input[k], opts);
    return o;
  }
  return input;
}

function helper3_47(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_47(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_47(input[k], opts);
    return o;
  }
  return input;
}

function helper3_48(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_48(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_48(input[k], opts);
    return o;
  }
  return input;
}

function helper3_49(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper3_49(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper3_49(input[k], opts);
    return o;
  }
  return input;
}

module.exports = {
  helper3_0,
  helper3_1,
  helper3_2,
  helper3_3,
  helper3_4,
  helper3_5,
  helper3_6,
  helper3_7,
  helper3_8,
  helper3_9,
  helper3_10,
  helper3_11,
  helper3_12,
  helper3_13,
  helper3_14,
  helper3_15,
  helper3_16,
  helper3_17,
  helper3_18,
  helper3_19,
  helper3_20,
  helper3_21,
  helper3_22,
  helper3_23,
  helper3_24,
  helper3_25,
  helper3_26,
  helper3_27,
  helper3_28,
  helper3_29,
  helper3_30,
  helper3_31,
  helper3_32,
  helper3_33,
  helper3_34,
  helper3_35,
  helper3_36,
  helper3_37,
  helper3_38,
  helper3_39,
  helper3_40,
  helper3_41,
  helper3_42,
  helper3_43,
  helper3_44,
  helper3_45,
  helper3_46,
  helper3_47,
  helper3_48,
  helper3_49,
};
