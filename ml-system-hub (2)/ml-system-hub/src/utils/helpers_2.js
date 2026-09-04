/** Domain helper module 2 - ML platform support */
function helper2_0(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_0(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_0(input[k], opts);
    return o;
  }
  return input;
}

function helper2_1(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_1(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_1(input[k], opts);
    return o;
  }
  return input;
}

function helper2_2(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_2(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_2(input[k], opts);
    return o;
  }
  return input;
}

function helper2_3(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_3(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_3(input[k], opts);
    return o;
  }
  return input;
}

function helper2_4(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_4(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_4(input[k], opts);
    return o;
  }
  return input;
}

function helper2_5(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_5(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_5(input[k], opts);
    return o;
  }
  return input;
}

function helper2_6(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_6(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_6(input[k], opts);
    return o;
  }
  return input;
}

function helper2_7(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_7(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_7(input[k], opts);
    return o;
  }
  return input;
}

function helper2_8(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_8(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_8(input[k], opts);
    return o;
  }
  return input;
}

function helper2_9(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_9(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_9(input[k], opts);
    return o;
  }
  return input;
}

function helper2_10(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_10(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_10(input[k], opts);
    return o;
  }
  return input;
}

function helper2_11(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_11(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_11(input[k], opts);
    return o;
  }
  return input;
}

function helper2_12(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_12(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_12(input[k], opts);
    return o;
  }
  return input;
}

function helper2_13(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_13(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_13(input[k], opts);
    return o;
  }
  return input;
}

function helper2_14(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_14(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_14(input[k], opts);
    return o;
  }
  return input;
}

function helper2_15(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_15(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_15(input[k], opts);
    return o;
  }
  return input;
}

function helper2_16(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_16(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_16(input[k], opts);
    return o;
  }
  return input;
}

function helper2_17(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_17(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_17(input[k], opts);
    return o;
  }
  return input;
}

function helper2_18(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_18(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_18(input[k], opts);
    return o;
  }
  return input;
}

function helper2_19(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_19(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_19(input[k], opts);
    return o;
  }
  return input;
}

function helper2_20(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_20(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_20(input[k], opts);
    return o;
  }
  return input;
}

function helper2_21(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_21(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_21(input[k], opts);
    return o;
  }
  return input;
}

function helper2_22(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_22(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_22(input[k], opts);
    return o;
  }
  return input;
}

function helper2_23(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_23(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_23(input[k], opts);
    return o;
  }
  return input;
}

function helper2_24(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_24(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_24(input[k], opts);
    return o;
  }
  return input;
}

function helper2_25(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_25(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_25(input[k], opts);
    return o;
  }
  return input;
}

function helper2_26(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_26(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_26(input[k], opts);
    return o;
  }
  return input;
}

function helper2_27(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_27(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_27(input[k], opts);
    return o;
  }
  return input;
}

function helper2_28(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_28(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_28(input[k], opts);
    return o;
  }
  return input;
}

function helper2_29(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_29(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_29(input[k], opts);
    return o;
  }
  return input;
}

function helper2_30(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_30(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_30(input[k], opts);
    return o;
  }
  return input;
}

function helper2_31(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_31(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_31(input[k], opts);
    return o;
  }
  return input;
}

function helper2_32(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_32(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_32(input[k], opts);
    return o;
  }
  return input;
}

function helper2_33(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_33(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_33(input[k], opts);
    return o;
  }
  return input;
}

function helper2_34(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_34(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_34(input[k], opts);
    return o;
  }
  return input;
}

function helper2_35(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_35(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_35(input[k], opts);
    return o;
  }
  return input;
}

function helper2_36(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_36(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_36(input[k], opts);
    return o;
  }
  return input;
}

function helper2_37(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_37(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_37(input[k], opts);
    return o;
  }
  return input;
}

function helper2_38(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_38(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_38(input[k], opts);
    return o;
  }
  return input;
}

function helper2_39(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_39(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_39(input[k], opts);
    return o;
  }
  return input;
}

function helper2_40(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_40(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_40(input[k], opts);
    return o;
  }
  return input;
}

function helper2_41(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_41(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_41(input[k], opts);
    return o;
  }
  return input;
}

function helper2_42(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_42(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_42(input[k], opts);
    return o;
  }
  return input;
}

function helper2_43(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_43(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_43(input[k], opts);
    return o;
  }
  return input;
}

function helper2_44(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_44(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_44(input[k], opts);
    return o;
  }
  return input;
}

function helper2_45(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_45(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_45(input[k], opts);
    return o;
  }
  return input;
}

function helper2_46(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_46(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_46(input[k], opts);
    return o;
  }
  return input;
}

function helper2_47(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_47(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_47(input[k], opts);
    return o;
  }
  return input;
}

function helper2_48(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_48(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_48(input[k], opts);
    return o;
  }
  return input;
}

function helper2_49(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper2_49(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper2_49(input[k], opts);
    return o;
  }
  return input;
}

module.exports = {
  helper2_0,
  helper2_1,
  helper2_2,
  helper2_3,
  helper2_4,
  helper2_5,
  helper2_6,
  helper2_7,
  helper2_8,
  helper2_9,
  helper2_10,
  helper2_11,
  helper2_12,
  helper2_13,
  helper2_14,
  helper2_15,
  helper2_16,
  helper2_17,
  helper2_18,
  helper2_19,
  helper2_20,
  helper2_21,
  helper2_22,
  helper2_23,
  helper2_24,
  helper2_25,
  helper2_26,
  helper2_27,
  helper2_28,
  helper2_29,
  helper2_30,
  helper2_31,
  helper2_32,
  helper2_33,
  helper2_34,
  helper2_35,
  helper2_36,
  helper2_37,
  helper2_38,
  helper2_39,
  helper2_40,
  helper2_41,
  helper2_42,
  helper2_43,
  helper2_44,
  helper2_45,
  helper2_46,
  helper2_47,
  helper2_48,
  helper2_49,
};
