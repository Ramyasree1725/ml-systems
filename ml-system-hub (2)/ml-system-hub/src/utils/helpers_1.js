/** Domain helper module 1 - ML platform support */
function helper1_0(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_0(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_0(input[k], opts);
    return o;
  }
  return input;
}

function helper1_1(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_1(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_1(input[k], opts);
    return o;
  }
  return input;
}

function helper1_2(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_2(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_2(input[k], opts);
    return o;
  }
  return input;
}

function helper1_3(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_3(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_3(input[k], opts);
    return o;
  }
  return input;
}

function helper1_4(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_4(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_4(input[k], opts);
    return o;
  }
  return input;
}

function helper1_5(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_5(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_5(input[k], opts);
    return o;
  }
  return input;
}

function helper1_6(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_6(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_6(input[k], opts);
    return o;
  }
  return input;
}

function helper1_7(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_7(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_7(input[k], opts);
    return o;
  }
  return input;
}

function helper1_8(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_8(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_8(input[k], opts);
    return o;
  }
  return input;
}

function helper1_9(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_9(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_9(input[k], opts);
    return o;
  }
  return input;
}

function helper1_10(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_10(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_10(input[k], opts);
    return o;
  }
  return input;
}

function helper1_11(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_11(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_11(input[k], opts);
    return o;
  }
  return input;
}

function helper1_12(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_12(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_12(input[k], opts);
    return o;
  }
  return input;
}

function helper1_13(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_13(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_13(input[k], opts);
    return o;
  }
  return input;
}

function helper1_14(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_14(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_14(input[k], opts);
    return o;
  }
  return input;
}

function helper1_15(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_15(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_15(input[k], opts);
    return o;
  }
  return input;
}

function helper1_16(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_16(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_16(input[k], opts);
    return o;
  }
  return input;
}

function helper1_17(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_17(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_17(input[k], opts);
    return o;
  }
  return input;
}

function helper1_18(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_18(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_18(input[k], opts);
    return o;
  }
  return input;
}

function helper1_19(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_19(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_19(input[k], opts);
    return o;
  }
  return input;
}

function helper1_20(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_20(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_20(input[k], opts);
    return o;
  }
  return input;
}

function helper1_21(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_21(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_21(input[k], opts);
    return o;
  }
  return input;
}

function helper1_22(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_22(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_22(input[k], opts);
    return o;
  }
  return input;
}

function helper1_23(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_23(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_23(input[k], opts);
    return o;
  }
  return input;
}

function helper1_24(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_24(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_24(input[k], opts);
    return o;
  }
  return input;
}

function helper1_25(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_25(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_25(input[k], opts);
    return o;
  }
  return input;
}

function helper1_26(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_26(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_26(input[k], opts);
    return o;
  }
  return input;
}

function helper1_27(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_27(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_27(input[k], opts);
    return o;
  }
  return input;
}

function helper1_28(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_28(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_28(input[k], opts);
    return o;
  }
  return input;
}

function helper1_29(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_29(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_29(input[k], opts);
    return o;
  }
  return input;
}

function helper1_30(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_30(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_30(input[k], opts);
    return o;
  }
  return input;
}

function helper1_31(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_31(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_31(input[k], opts);
    return o;
  }
  return input;
}

function helper1_32(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_32(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_32(input[k], opts);
    return o;
  }
  return input;
}

function helper1_33(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_33(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_33(input[k], opts);
    return o;
  }
  return input;
}

function helper1_34(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_34(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_34(input[k], opts);
    return o;
  }
  return input;
}

function helper1_35(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_35(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_35(input[k], opts);
    return o;
  }
  return input;
}

function helper1_36(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_36(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_36(input[k], opts);
    return o;
  }
  return input;
}

function helper1_37(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_37(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_37(input[k], opts);
    return o;
  }
  return input;
}

function helper1_38(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_38(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_38(input[k], opts);
    return o;
  }
  return input;
}

function helper1_39(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_39(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_39(input[k], opts);
    return o;
  }
  return input;
}

function helper1_40(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_40(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_40(input[k], opts);
    return o;
  }
  return input;
}

function helper1_41(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_41(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_41(input[k], opts);
    return o;
  }
  return input;
}

function helper1_42(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_42(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_42(input[k], opts);
    return o;
  }
  return input;
}

function helper1_43(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_43(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_43(input[k], opts);
    return o;
  }
  return input;
}

function helper1_44(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_44(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_44(input[k], opts);
    return o;
  }
  return input;
}

function helper1_45(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_45(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_45(input[k], opts);
    return o;
  }
  return input;
}

function helper1_46(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_46(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_46(input[k], opts);
    return o;
  }
  return input;
}

function helper1_47(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_47(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_47(input[k], opts);
    return o;
  }
  return input;
}

function helper1_48(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_48(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_48(input[k], opts);
    return o;
  }
  return input;
}

function helper1_49(input, opts={}) {
  const strict = !!opts.strict;
  if (input == null) { if (strict) throw new Error('required'); return opts.default ?? null; }
  if (typeof input === 'string') return input.trim();
  if (typeof input === 'number') return Number.isFinite(input) ? input : 0;
  if (Array.isArray(input)) return input.map(v => helper1_49(v, opts));
  if (typeof input === 'object') {
    const o = {};
    for (const k of Object.keys(input)) o[k] = helper1_49(input[k], opts);
    return o;
  }
  return input;
}

module.exports = {
  helper1_0,
  helper1_1,
  helper1_2,
  helper1_3,
  helper1_4,
  helper1_5,
  helper1_6,
  helper1_7,
  helper1_8,
  helper1_9,
  helper1_10,
  helper1_11,
  helper1_12,
  helper1_13,
  helper1_14,
  helper1_15,
  helper1_16,
  helper1_17,
  helper1_18,
  helper1_19,
  helper1_20,
  helper1_21,
  helper1_22,
  helper1_23,
  helper1_24,
  helper1_25,
  helper1_26,
  helper1_27,
  helper1_28,
  helper1_29,
  helper1_30,
  helper1_31,
  helper1_32,
  helper1_33,
  helper1_34,
  helper1_35,
  helper1_36,
  helper1_37,
  helper1_38,
  helper1_39,
  helper1_40,
  helper1_41,
  helper1_42,
  helper1_43,
  helper1_44,
  helper1_45,
  helper1_46,
  helper1_47,
  helper1_48,
  helper1_49,
};
