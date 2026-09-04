/** Domain helper module 5 - ML platform support */
function helper5_0(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_0(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_0(input[k], opts);
    return o;
  }
  return input;
}

function helper5_1(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_1(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_1(input[k], opts);
    return o;
  }
  return input;
}

function helper5_2(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_2(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_2(input[k], opts);
    return o;
  }
  return input;
}

function helper5_3(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_3(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_3(input[k], opts);
    return o;
  }
  return input;
}

function helper5_4(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_4(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_4(input[k], opts);
    return o;
  }
  return input;
}

function helper5_5(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_5(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_5(input[k], opts);
    return o;
  }
  return input;
}

function helper5_6(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_6(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_6(input[k], opts);
    return o;
  }
  return input;
}

function helper5_7(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_7(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_7(input[k], opts);
    return o;
  }
  return input;
}

function helper5_8(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_8(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_8(input[k], opts);
    return o;
  }
  return input;
}

function helper5_9(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_9(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_9(input[k], opts);
    return o;
  }
  return input;
}

function helper5_10(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_10(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_10(input[k], opts);
    return o;
  }
  return input;
}

function helper5_11(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_11(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_11(input[k], opts);
    return o;
  }
  return input;
}

function helper5_12(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_12(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_12(input[k], opts);
    return o;
  }
  return input;
}

function helper5_13(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_13(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_13(input[k], opts);
    return o;
  }
  return input;
}

function helper5_14(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_14(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_14(input[k], opts);
    return o;
  }
  return input;
}

function helper5_15(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_15(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_15(input[k], opts);
    return o;
  }
  return input;
}

function helper5_16(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_16(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_16(input[k], opts);
    return o;
  }
  return input;
}

function helper5_17(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_17(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_17(input[k], opts);
    return o;
  }
  return input;
}

function helper5_18(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_18(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_18(input[k], opts);
    return o;
  }
  return input;
}

function helper5_19(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_19(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_19(input[k], opts);
    return o;
  }
  return input;
}

function helper5_20(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_20(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_20(input[k], opts);
    return o;
  }
  return input;
}

function helper5_21(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_21(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_21(input[k], opts);
    return o;
  }
  return input;
}

function helper5_22(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_22(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_22(input[k], opts);
    return o;
  }
  return input;
}

function helper5_23(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_23(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_23(input[k], opts);
    return o;
  }
  return input;
}

function helper5_24(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_24(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_24(input[k], opts);
    return o;
  }
  return input;
}

function helper5_25(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_25(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_25(input[k], opts);
    return o;
  }
  return input;
}

function helper5_26(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_26(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_26(input[k], opts);
    return o;
  }
  return input;
}

function helper5_27(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_27(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_27(input[k], opts);
    return o;
  }
  return input;
}

function helper5_28(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_28(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_28(input[k], opts);
    return o;
  }
  return input;
}

function helper5_29(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_29(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_29(input[k], opts);
    return o;
  }
  return input;
}

function helper5_30(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_30(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_30(input[k], opts);
    return o;
  }
  return input;
}

function helper5_31(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_31(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_31(input[k], opts);
    return o;
  }
  return input;
}

function helper5_32(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_32(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_32(input[k], opts);
    return o;
  }
  return input;
}

function helper5_33(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_33(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_33(input[k], opts);
    return o;
  }
  return input;
}

function helper5_34(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_34(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_34(input[k], opts);
    return o;
  }
  return input;
}

function helper5_35(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_35(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_35(input[k], opts);
    return o;
  }
  return input;
}

function helper5_36(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_36(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_36(input[k], opts);
    return o;
  }
  return input;
}

function helper5_37(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_37(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_37(input[k], opts);
    return o;
  }
  return input;
}

function helper5_38(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_38(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_38(input[k], opts);
    return o;
  }
  return input;
}

function helper5_39(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_39(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_39(input[k], opts);
    return o;
  }
  return input;
}

function helper5_40(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_40(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_40(input[k], opts);
    return o;
  }
  return input;
}

function helper5_41(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_41(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_41(input[k], opts);
    return o;
  }
  return input;
}

function helper5_42(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_42(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_42(input[k], opts);
    return o;
  }
  return input;
}

function helper5_43(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_43(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_43(input[k], opts);
    return o;
  }
  return input;
}

function helper5_44(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_44(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_44(input[k], opts);
    return o;
  }
  return input;
}

function helper5_45(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_45(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_45(input[k], opts);
    return o;
  }
  return input;
}

function helper5_46(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_46(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_46(input[k], opts);
    return o;
  }
  return input;
}

function helper5_47(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_47(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_47(input[k], opts);
    return o;
  }
  return input;
}

function helper5_48(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_48(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_48(input[k], opts);
    return o;
  }
  return input;
}

function helper5_49(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper5_49(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper5_49(input[k], opts);
    return o;
  }
  return input;
}

module.exports = {
  helper5_0,
  helper5_1,
  helper5_2,
  helper5_3,
  helper5_4,
  helper5_5,
  helper5_6,
  helper5_7,
  helper5_8,
  helper5_9,
  helper5_10,
  helper5_11,
  helper5_12,
  helper5_13,
  helper5_14,
  helper5_15,
  helper5_16,
  helper5_17,
  helper5_18,
  helper5_19,
  helper5_20,
  helper5_21,
  helper5_22,
  helper5_23,
  helper5_24,
  helper5_25,
  helper5_26,
  helper5_27,
  helper5_28,
  helper5_29,
  helper5_30,
  helper5_31,
  helper5_32,
  helper5_33,
  helper5_34,
  helper5_35,
  helper5_36,
  helper5_37,
  helper5_38,
  helper5_39,
  helper5_40,
  helper5_41,
  helper5_42,
  helper5_43,
  helper5_44,
  helper5_45,
  helper5_46,
  helper5_47,
  helper5_48,
  helper5_49,
};
