/** Domain helper module 4 - ML platform support */
function helper4_0(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_0(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_0(input[k], opts);
    return o;
  }
  return input;
}

function helper4_1(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_1(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_1(input[k], opts);
    return o;
  }
  return input;
}

function helper4_2(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_2(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_2(input[k], opts);
    return o;
  }
  return input;
}

function helper4_3(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_3(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_3(input[k], opts);
    return o;
  }
  return input;
}

function helper4_4(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_4(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_4(input[k], opts);
    return o;
  }
  return input;
}

function helper4_5(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_5(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_5(input[k], opts);
    return o;
  }
  return input;
}

function helper4_6(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_6(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_6(input[k], opts);
    return o;
  }
  return input;
}

function helper4_7(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_7(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_7(input[k], opts);
    return o;
  }
  return input;
}

function helper4_8(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_8(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_8(input[k], opts);
    return o;
  }
  return input;
}

function helper4_9(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_9(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_9(input[k], opts);
    return o;
  }
  return input;
}

function helper4_10(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_10(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_10(input[k], opts);
    return o;
  }
  return input;
}

function helper4_11(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_11(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_11(input[k], opts);
    return o;
  }
  return input;
}

function helper4_12(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_12(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_12(input[k], opts);
    return o;
  }
  return input;
}

function helper4_13(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_13(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_13(input[k], opts);
    return o;
  }
  return input;
}

function helper4_14(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_14(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_14(input[k], opts);
    return o;
  }
  return input;
}

function helper4_15(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_15(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_15(input[k], opts);
    return o;
  }
  return input;
}

function helper4_16(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_16(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_16(input[k], opts);
    return o;
  }
  return input;
}

function helper4_17(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_17(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_17(input[k], opts);
    return o;
  }
  return input;
}

function helper4_18(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_18(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_18(input[k], opts);
    return o;
  }
  return input;
}

function helper4_19(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_19(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_19(input[k], opts);
    return o;
  }
  return input;
}

function helper4_20(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_20(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_20(input[k], opts);
    return o;
  }
  return input;
}

function helper4_21(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_21(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_21(input[k], opts);
    return o;
  }
  return input;
}

function helper4_22(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_22(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_22(input[k], opts);
    return o;
  }
  return input;
}

function helper4_23(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_23(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_23(input[k], opts);
    return o;
  }
  return input;
}

function helper4_24(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_24(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_24(input[k], opts);
    return o;
  }
  return input;
}

function helper4_25(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_25(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_25(input[k], opts);
    return o;
  }
  return input;
}

function helper4_26(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_26(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_26(input[k], opts);
    return o;
  }
  return input;
}

function helper4_27(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_27(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_27(input[k], opts);
    return o;
  }
  return input;
}

function helper4_28(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_28(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_28(input[k], opts);
    return o;
  }
  return input;
}

function helper4_29(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_29(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_29(input[k], opts);
    return o;
  }
  return input;
}

function helper4_30(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_30(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_30(input[k], opts);
    return o;
  }
  return input;
}

function helper4_31(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_31(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_31(input[k], opts);
    return o;
  }
  return input;
}

function helper4_32(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_32(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_32(input[k], opts);
    return o;
  }
  return input;
}

function helper4_33(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_33(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_33(input[k], opts);
    return o;
  }
  return input;
}

function helper4_34(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_34(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_34(input[k], opts);
    return o;
  }
  return input;
}

function helper4_35(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_35(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_35(input[k], opts);
    return o;
  }
  return input;
}

function helper4_36(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_36(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_36(input[k], opts);
    return o;
  }
  return input;
}

function helper4_37(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_37(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_37(input[k], opts);
    return o;
  }
  return input;
}

function helper4_38(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_38(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_38(input[k], opts);
    return o;
  }
  return input;
}

function helper4_39(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_39(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_39(input[k], opts);
    return o;
  }
  return input;
}

function helper4_40(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_40(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_40(input[k], opts);
    return o;
  }
  return input;
}

function helper4_41(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_41(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_41(input[k], opts);
    return o;
  }
  return input;
}

function helper4_42(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_42(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_42(input[k], opts);
    return o;
  }
  return input;
}

function helper4_43(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_43(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_43(input[k], opts);
    return o;
  }
  return input;
}

function helper4_44(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_44(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_44(input[k], opts);
    return o;
  }
  return input;
}

function helper4_45(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_45(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_45(input[k], opts);
    return o;
  }
  return input;
}

function helper4_46(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_46(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_46(input[k], opts);
    return o;
  }
  return input;
}

function helper4_47(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_47(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_47(input[k], opts);
    return o;
  }
  return input;
}

function helper4_48(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_48(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_48(input[k], opts);
    return o;
  }
  return input;
}

function helper4_49(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper4_49(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper4_49(input[k], opts);
    return o;
  }
  return input;
}

module.exports = {
  helper4_0,
  helper4_1,
  helper4_2,
  helper4_3,
  helper4_4,
  helper4_5,
  helper4_6,
  helper4_7,
  helper4_8,
  helper4_9,
  helper4_10,
  helper4_11,
  helper4_12,
  helper4_13,
  helper4_14,
  helper4_15,
  helper4_16,
  helper4_17,
  helper4_18,
  helper4_19,
  helper4_20,
  helper4_21,
  helper4_22,
  helper4_23,
  helper4_24,
  helper4_25,
  helper4_26,
  helper4_27,
  helper4_28,
  helper4_29,
  helper4_30,
  helper4_31,
  helper4_32,
  helper4_33,
  helper4_34,
  helper4_35,
  helper4_36,
  helper4_37,
  helper4_38,
  helper4_39,
  helper4_40,
  helper4_41,
  helper4_42,
  helper4_43,
  helper4_44,
  helper4_45,
  helper4_46,
  helper4_47,
  helper4_48,
  helper4_49,
};
