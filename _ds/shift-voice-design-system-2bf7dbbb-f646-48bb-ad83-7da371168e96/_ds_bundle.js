/* @ds-bundle: {"format":3,"namespace":"ShiftVoiceDesignSystem_2bf7db","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"StatusDot","sourcePath":"components/core/StatusDot.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"MetricCard","sourcePath":"components/data/MetricCard.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"StepIndicator","sourcePath":"components/navigation/StepIndicator.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"d8542b9fa5d0","components/brand/Wordmark.jsx":"9da68a5cffce","components/core/Badge.jsx":"31d77f9faa00","components/core/Button.jsx":"620ff891e84a","components/core/Card.jsx":"c77da2a66474","components/core/Eyebrow.jsx":"c3e232a18b96","components/core/StatusDot.jsx":"b851523aa211","components/core/Tag.jsx":"183eaab201d3","components/data/MetricCard.jsx":"5875870400ba","components/feedback/ProgressBar.jsx":"f524b1568ae1","components/feedback/Spinner.jsx":"bb7170cc5c31","components/forms/Field.jsx":"898dd2e0415b","components/navigation/StepIndicator.jsx":"c10978e548eb","ui_kits/capture_app/App.jsx":"ee5587c7147d","ui_kits/capture_app/components.jsx":"467941b974b6","ui_kits/capture_app/data.jsx":"da7b15f5645e","ui_kits/capture_app/screens.jsx":"1742891260c6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ShiftVoiceDesignSystem_2bf7db = window.ShiftVoiceDesignSystem_2bf7db || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SHIFT VOICE text wordmark — Barlow Condensed 800, wide tracking.
 * `shift` is the ink color, `voice` is the muted color. Used in app headers,
 * the dashboard summary bar, and footers where the figurative mark is too detailed.
 */
function Wordmark({
  theme = 'light',
  size = 20,
  style = {},
  ...rest
}) {
  const ink = theme === 'dark' ? 'var(--sv-on-dark)' : 'var(--sv-navy)';
  const muted = theme === 'dark' ? 'var(--sv-on-dark-faint)' : 'var(--sv-steel)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      letterSpacing: 'var(--tracking-wordmark)',
      fontSize: size,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: ink
    }
  }, "SHIFT"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: muted
    }
  }, "VOICE"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Figurative logo — renders a ShiftVoice logo PNG (full lockup or mark).
 * The PNGs live in the design system's assets/logo/ folder; pass `src` with
 * the correct relative path for your page. Falls back to the text Wordmark
 * when no `src` is given.
 */
function Logo({
  src = null,
  variant = 'color',
  // 'color' | 'white' | 'navy'
  kind = 'lockup',
  // 'lockup' | 'mark' (used only to pick the fallback height)
  height = kind === 'mark' ? 48 : 40,
  alt = 'ShiftVoice',
  style = {},
  ...rest
}) {
  if (!src) {
    return /*#__PURE__*/React.createElement(__ds_scope.Wordmark, _extends({
      theme: variant === 'white' ? 'dark' : 'light',
      size: height * 0.5,
      style: style
    }, rest));
  }
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: alt,
    style: {
      height,
      width: 'auto',
      display: 'block',
      objectFit: 'contain',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STATUS = {
  success: {
    solid: 'var(--sv-green)',
    ink: 'var(--sv-green-ink)',
    soft: 'rgba(47,143,99,0.1)'
  },
  warning: {
    solid: 'var(--sv-amber)',
    ink: 'var(--sv-amber-ink)',
    soft: 'rgba(198,138,34,0.1)'
  },
  danger: {
    solid: 'var(--sv-red)',
    ink: 'var(--sv-red-ink)',
    soft: 'rgba(214,88,72,0.1)'
  },
  info: {
    solid: 'var(--sv-teal)',
    ink: 'var(--sv-teal)',
    soft: 'var(--sv-teal-a10)'
  },
  neutral: {
    solid: 'var(--sv-steel)',
    ink: 'var(--sv-steel)',
    soft: 'rgba(104,125,133,0.12)'
  }
};

/**
 * Status / state pill — RESOLVED, MONITORING, OPEN, COMPLETE, event types.
 * `soft` tone (tinted bg + colored ink) is the default; `solid` for emphasis.
 */
function Badge({
  status = 'info',
  tone = 'soft',
  uppercase = true,
  dot = false,
  children,
  style = {},
  ...rest
}) {
  const c = STATUS[status] || STATUS.info;
  const solid = tone === 'solid';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-ui)',
      fontSize: '0.6875rem',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.04em',
      textTransform: uppercase ? 'uppercase' : 'none',
      lineHeight: 1,
      padding: '3px 9px',
      borderRadius: 'var(--radius-pill)',
      background: solid ? c.solid : c.soft,
      color: solid ? 'var(--sv-white)' : c.ink,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: solid ? 'var(--sv-white)' : c.solid
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Shift Voice primary action button.
 * Solid teal by default; warm, generously rounded, soft shadow.
 */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '0.8125rem',
      radius: 'var(--radius-md)',
      gap: 6
    },
    md: {
      padding: '12px 22px',
      fontSize: '0.875rem',
      radius: 'var(--radius-lg)',
      gap: 8
    },
    lg: {
      padding: '15px 30px',
      fontSize: '0.9375rem',
      radius: 'var(--radius-lg)',
      gap: 9
    }
  };
  const s = sizes[size] || sizes.md;
  const palettes = {
    primary: {
      background: hover ? 'var(--action-primary-hover)' : 'var(--action-primary)',
      color: 'var(--sv-white)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: hover ? 'rgba(18,35,44,0.04)' : 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid rgba(18,35,44,0.2)',
      boxShadow: 'none'
    },
    ghost: {
      background: hover ? 'var(--sv-teal-a10)' : 'transparent',
      color: 'var(--text-accent)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    onDark: {
      background: hover ? 'var(--sv-vanilla)' : 'var(--sv-white)',
      color: 'var(--text-accent)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-md)'
    },
    danger: {
      background: hover ? '#c0402e' : 'var(--status-danger)',
      color: 'var(--sv-white)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    }
  };
  const p = palettes[variant] || palettes.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: s.fontSize,
      lineHeight: 1,
      padding: s.padding,
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transform: press && !disabled ? 'scale(0.98)' : 'scale(1)',
      transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      ...p,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Shift Voice surface card — floral-white fill, hairline navy border,
 * soft shadow. Optional accent stripe (event-type / phase color) and hover lift.
 */
function Card({
  accentColor = null,
  accentSide = 'top',
  interactive = false,
  selected = false,
  radius = 'var(--radius-xl)',
  padding = 'var(--space-6)',
  onClick,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const lift = interactive && hover;
  const accent = accentColor ? accentSide === 'left' ? {
    borderLeft: `3px solid ${accentColor}`
  } : {
    borderTop: `3px solid ${accentColor}`
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderColor: selected ? 'var(--action-primary)' : lift ? 'var(--border-accent)' : 'var(--border-default)',
      borderRadius: radius,
      padding,
      boxShadow: selected ? 'var(--shadow-focus)' : lift ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: lift ? 'translateY(-1px)' : 'translateY(0)',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : 'default',
      ...accent,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Uppercase section eyebrow / label — Barlow, wide tracking, steel.
 * The connective tissue above headlines, in KPI labels, and on chrome.
 * Pass `pill` for the teal-tinted rounded variant used on the marketing site.
 */
function Eyebrow({
  pill = false,
  color,
  children,
  style = {},
  ...rest
}) {
  const base = {
    display: 'inline-block',
    fontFamily: 'var(--font-ui)',
    fontSize: '0.75rem',
    fontWeight: 'var(--fw-semibold)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-label)',
    lineHeight: 1.2
  };
  if (pill) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        ...base,
        color: color || 'var(--text-accent)',
        background: 'var(--sv-teal-a10)',
        padding: '6px 12px',
        borderRadius: 'var(--radius-pill)',
        ...style
      }
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      color: color || 'var(--text-secondary)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const COLORS = {
  success: 'var(--sv-green)',
  warning: 'var(--sv-amber)',
  danger: 'var(--sv-red)',
  info: 'var(--sv-teal-light)',
  neutral: 'var(--sv-steel)'
};

/**
 * Small filled status dot — Shift Voice frequently signals state with a dot
 * rather than an icon (resolved / monitoring / open / info).
 */
function StatusDot({
  status = 'neutral',
  size = 9,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      borderRadius: '50%',
      flexShrink: 0,
      background: COLORS[status] || COLORS.neutral,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Taxonomy tag — the teal pill used for note tags (overheating, cooling, seal…).
 * `solid` teal by default; `tint` for low-emphasis contextual chips.
 */
function Tag({
  tone = 'solid',
  children,
  style = {},
  ...rest
}) {
  const solid = tone === 'solid';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-ui)',
      fontSize: '0.75rem',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 1,
      padding: '5px 11px',
      borderRadius: 'var(--radius-pill)',
      background: solid ? 'var(--sv-teal)' : 'var(--sv-teal-a10)',
      color: solid ? 'var(--sv-white)' : 'var(--sv-teal)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KPI / metric tile — uppercase label, large display value, optional sub.
 * Used in the dashboard shift report and the operator summary.
 */
function MetricCard({
  label,
  value,
  sub = null,
  tone = 'default',
  // 'default' | 'good' | 'warn' | 'bad'
  display = true,
  style = {},
  ...rest
}) {
  const valueColor = {
    default: 'var(--text-primary)',
    good: 'var(--sv-green)',
    warn: 'var(--sv-amber)',
    bad: 'var(--sv-red-ink)',
    accent: 'var(--text-accent)'
  }[tone] || 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: '0.625rem',
      fontWeight: 'var(--fw-semibold)',
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: display ? 'var(--font-display)' : 'var(--font-ui)',
      fontWeight: 'var(--fw-black)',
      fontSize: display ? '1.9rem' : '1.4rem',
      lineHeight: 1,
      color: valueColor,
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.6875rem',
      color: 'var(--text-secondary)'
    }
  }, sub));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Completeness / progress bar — the rounded warm track with a semantic fill
 * used for the note completeness score. Color follows the score by default.
 */
function ProgressBar({
  value = 0,
  max = 100,
  color = null,
  height = 12,
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const autoColor = value >= 60 ? 'var(--sv-green)' : 'var(--sv-amber)';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemax": max,
    style: {
      width: '100%',
      height,
      background: 'var(--sv-line)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: color || autoColor,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-standard), background var(--dur-slow) var(--ease-standard)'
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Spinner — a teal ring with a transparent top, the system's only loading
 * affordance (used while transcribing / parsing / summarising).
 */
function Spinner({
  size = 40,
  thickness = 4,
  color = 'var(--sv-teal)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      border: `${thickness}px solid ${color}`,
      borderTopColor: 'transparent',
      borderRadius: '50%',
      animation: 'sv-spin 0.8s linear infinite',
      ...style
    }
  }, rest)), /*#__PURE__*/React.createElement("style", null, `@keyframes sv-spin { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { @keyframes sv-spin { to { transform: none; } } }`));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Labelled text field — the editable field used on the note-review screen,
 * with optional completeness "scoring" state (filled = green, missing = amber).
 */
function Field({
  label,
  value = '',
  onChange,
  placeholder = '',
  hint = null,
  scoreState = 'default',
  // 'default' | 'filled' | 'missing'
  multiline = false,
  rows = 3,
  type = 'text',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const stateColor = {
    default: 'var(--border-default)',
    filled: 'var(--sv-green)',
    missing: 'var(--sv-amber)'
  }[scoreState] || 'var(--border-default)';
  const hintColor = {
    default: 'var(--text-secondary)',
    filled: 'var(--sv-green-ink)',
    missing: 'var(--sv-amber-ink)'
  }[scoreState];
  const inputStyle = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-ui)',
    fontSize: '0.875rem',
    color: 'var(--text-primary)',
    background: 'var(--sv-white)',
    border: `1px solid ${focus ? 'var(--action-primary)' : stateColor}`,
    borderRadius: 'var(--radius-sm)',
    padding: multiline ? '10px 14px' : '10px 14px',
    outline: 'none',
    boxShadow: focus ? 'var(--shadow-focus)' : 'none',
    transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
    resize: multiline ? 'vertical' : undefined
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, (label || hint) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: '0.75rem',
      fontWeight: 'var(--fw-semibold)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: 'var(--text-primary)'
    }
  }, label), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: hintColor
    }
  }, hint)), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: inputStyle
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: inputStyle
  }, rest)));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/navigation/StepIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Horizontal step indicator — the capture flow's circled steps with a
 * connector line. Completed steps show a check; the current step is teal.
 */
function StepIndicator({
  steps = [],
  current = 0,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, rest), steps.map((label, i) => {
    const done = i < current;
    const active = i === current;
    const circleBg = active ? 'var(--action-primary)' : done ? 'var(--sv-green)' : 'var(--sv-line)';
    const circleColor = active || done ? 'var(--sv-white)' : 'var(--text-secondary)';
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, i > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 1,
        background: 'var(--sv-line)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: circleBg,
        color: circleColor,
        fontFamily: 'var(--font-ui)',
        fontWeight: 'var(--fw-bold)',
        fontSize: '0.8125rem',
        transition: 'background var(--dur-base) var(--ease-standard)'
      }
    }, done ? '✓' : i + 1), label && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: '0.8125rem',
        textTransform: 'capitalize',
        color: active ? 'var(--text-accent)' : 'var(--text-secondary)',
        fontWeight: active ? 'var(--fw-semibold)' : 'var(--fw-regular)'
      }
    }, label));
  }));
}
Object.assign(__ds_scope, { StepIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/StepIndicator.jsx", error: String((e && e.message) || e) }); }

// ui_kits/capture_app/App.jsx
try { (() => {
// ShiftVoice capture app — orchestrator (header, step rail, screen state machine).

function App() {
  const [step, setStep] = React.useState(0); // 0 capture, 1 review, 2 saved
  const [notes, setNotes] = React.useState(SEED_NOTES);
  const [saved, setSaved] = React.useState(null);
  const handleTranscript = () => setStep(1);
  const handleSave = result => {
    setSaved(result);
    setNotes(n => [{
      id: 'new' + Date.now(),
      time: 'now',
      machine: result.fields.machine,
      reason: result.fields.reason,
      action: result.fields.actionTaken,
      complete: result.complete
    }, ...n]);
    setStep(2);
  };
  const handleNew = () => {
    setSaved(null);
    setStep(0);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 18px',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/shiftvoice-mark-color.png",
    alt: "",
    style: {
      height: 30,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      letterSpacing: '0.18em',
      fontSize: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sv-navy)'
    }
  }, "SHIFT"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sv-steel)'
    }
  }, "VOICE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "../dashboard/index.html",
    style: {
      fontSize: 12,
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--sv-teal)',
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 600
    }
  }, "Dashboard \u2192"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-page)',
      color: 'var(--text-secondary)'
    }
  }, "device_3f9a"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 16px'
    }
  }, /*#__PURE__*/React.createElement(SvStep, {
    steps: ['capture', 'review', 'done'],
    current: step
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '0 18px 40px',
      maxWidth: 480,
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, step === 0 && /*#__PURE__*/React.createElement(CaptureScreen, {
    notes: notes,
    onTranscript: handleTranscript
  }), step === 1 && /*#__PURE__*/React.createElement(ReviewScreen, {
    onSave: handleSave,
    onBack: () => setStep(0)
  }), step === 2 && saved && /*#__PURE__*/React.createElement(SavedScreen, {
    saved: saved,
    onNew: handleNew
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/capture_app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/capture_app/components.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ShiftVoice capture app — shared UI atoms (self-contained, token-styled).
// Mirrors the design system primitives; kept local so the kit renders standalone.

function SvIcon({
  name,
  size = 24,
  stroke = 'currentColor',
  sw = 2,
  fill = 'none'
}) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill,
    stroke,
    strokeWidth: sw,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  const paths = {
    mic: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "2",
      width: "6",
      height: "13",
      rx: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 10v2a7 7 0 0 1-14 0v-2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "19",
      x2: "12",
      y2: "22"
    })),
    stop: /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "5",
      width: "14",
      height: "14",
      rx: "2",
      fill: stroke,
      stroke: "none"
    }),
    check: /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    }),
    chevron: /*#__PURE__*/React.createElement("polyline", {
      points: "6 9 12 15 18 9"
    }),
    link: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"
    })),
    grid: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "7",
      height: "7"
    })),
    arrowRight: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 5 19 12 12 19"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", _extends({}, common, {
    style: {
      display: 'block',
      flexShrink: 0
    }
  }), paths[name]);
}
function SvButton({
  variant = 'primary',
  size = 'md',
  disabled,
  fullWidth,
  iconLeft,
  iconRight,
  onClick,
  children,
  style = {}
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const sz = {
    sm: ['8px 16px', 13, 'var(--radius-md)'],
    md: ['13px 22px', 14, 'var(--radius-lg)'],
    lg: ['16px 30px', 15, 'var(--radius-lg)']
  }[size];
  const pal = {
    primary: {
      background: h ? 'var(--action-primary-hover)' : 'var(--action-primary)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: h ? 'rgba(18,35,44,0.04)' : 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid rgba(18,35,44,0.2)'
    },
    ghost: {
      background: h ? 'var(--sv-teal-a10)' : 'transparent',
      color: 'var(--text-accent)',
      border: '1px solid transparent'
    },
    amber: {
      background: h ? '#b87d10' : 'var(--sv-amber)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: sz[1],
      lineHeight: 1,
      padding: sz[0],
      borderRadius: sz[2],
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transform: p && !disabled ? 'scale(0.98)' : 'scale(1)',
      transition: 'all var(--dur-fast) var(--ease-standard)',
      ...pal,
      ...style
    }
  }, iconLeft, children, iconRight);
}
function SvCard({
  children,
  accentColor,
  accentSide = 'top',
  interactive,
  selected,
  radius = 'var(--radius-xl)',
  padding = 'var(--space-6)',
  onClick,
  style = {}
}) {
  const [h, setH] = React.useState(false);
  const lift = interactive && h;
  const accent = accentColor ? accentSide === 'left' ? {
    borderLeft: `3px solid ${accentColor}`
  } : {
    borderTop: `3px solid ${accentColor}`
  } : {};
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderColor: selected ? 'var(--action-primary)' : lift ? 'var(--border-accent)' : 'var(--border-default)',
      borderRadius: radius,
      padding,
      boxShadow: selected ? 'var(--shadow-focus)' : lift ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: lift ? 'translateY(-1px)' : 'none',
      transition: 'all var(--dur-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : 'default',
      ...accent,
      ...style
    }
  }, children);
}
function SvBadge({
  status = 'info',
  tone = 'soft',
  dot,
  children
}) {
  const map = {
    success: ['var(--sv-green)', 'var(--sv-green-ink)', 'rgba(47,143,99,0.1)'],
    warning: ['var(--sv-amber)', 'var(--sv-amber-ink)', 'rgba(198,138,34,0.1)'],
    danger: ['var(--sv-red)', 'var(--sv-red-ink)', 'rgba(214,88,72,0.1)'],
    info: ['var(--sv-teal)', 'var(--sv-teal)', 'var(--sv-teal-a10)']
  }[status];
  const solid = tone === 'solid';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      lineHeight: 1,
      padding: '3px 9px',
      borderRadius: 'var(--radius-pill)',
      background: solid ? map[0] : map[2],
      color: solid ? '#fff' : map[1]
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: solid ? '#fff' : map[0]
    }
  }), children);
}
function SvTag({
  tone = 'solid',
  children
}) {
  const solid = tone === 'solid';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1,
      padding: '5px 11px',
      borderRadius: 'var(--radius-pill)',
      background: solid ? 'var(--sv-teal)' : 'var(--sv-teal-a10)',
      color: solid ? '#fff' : 'var(--sv-teal)'
    }
  }, children);
}
function SvEyebrow({
  children,
  color,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: color || 'var(--text-secondary)',
      ...style
    }
  }, children);
}
function SvProgress({
  value,
  color
}) {
  const auto = value >= 60 ? 'var(--sv-green)' : 'var(--sv-amber)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: 12,
      background: 'var(--sv-line)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${Math.min(100, value)}%`,
      height: '100%',
      background: color || auto,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-standard)'
    }
  }));
}
function SvSpinner({
  size = 40,
  thickness = 4,
  color = 'var(--sv-teal)'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      border: `${thickness}px solid ${color}`,
      borderTopColor: 'transparent',
      borderRadius: '50%',
      animation: 'sv-spin 0.8s linear infinite'
    }
  });
}
function SvStep({
  steps,
  current
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, steps.map((label, i) => {
    const done = i < current,
      active = i === current;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, i > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 28,
        height: 1,
        background: 'var(--sv-line)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: active ? 'var(--action-primary)' : done ? 'var(--sv-green)' : 'var(--sv-line)',
        color: active || done ? '#fff' : 'var(--text-secondary)',
        fontWeight: 700,
        fontSize: 13
      }
    }, done ? '✓' : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        textTransform: 'capitalize',
        color: active ? 'var(--text-accent)' : 'var(--text-secondary)',
        fontWeight: active ? 600 : 400
      }
    }, label));
  }));
}
Object.assign(window, {
  SvIcon,
  SvButton,
  SvCard,
  SvBadge,
  SvTag,
  SvEyebrow,
  SvProgress,
  SvSpinner,
  SvStep
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/capture_app/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/capture_app/data.jsx
try { (() => {
// ShiftVoice capture app — sample data (from the prototype's seed notes & demo script).

const DEMO_SCRIPT = "Around 2am, Moulding Machine 3 went down — the temperature sensor kept triggering the overheating alarm, reading about 40 degrees above setpoint. I isolated the machine and called maintenance to check the cooling fan. Turned out the fan had a blocked filter cutting airflow. We cleared the blockage and restarted the machine. Lesson: cooling fan filters on Moulding Machine 3 should be checked every week.";

// Fields the model "extracts" from the demo script (100/100).
const DEMO_FIELDS = {
  reason: 'overheating',
  machine: 'Moulding Machine 3',
  actionTaken: 'isolated machine, called maintenance, cleared blockage, restarted machine',
  component: 'cooling fan',
  lesson: 'check cooling fan filters on Moulding Machine 3 every week'
};
const DEMO_TAGS = ['overheating', 'cooling', 'moulding', 'sensor'];
const FIELD_META = [{
  key: 'reason',
  label: 'Reason for note',
  placeholder: 'e.g. overheating, seal failure',
  weight: 30
}, {
  key: 'machine',
  label: 'Machine / line',
  placeholder: 'e.g. moulding machine 3, line 2',
  weight: 25
}, {
  key: 'actionTaken',
  label: 'Action taken',
  placeholder: 'e.g. called maintenance, changed seal',
  weight: 25
}, {
  key: 'component',
  label: 'Component involved',
  placeholder: 'e.g. seal, motor, bearing',
  weight: 10
}, {
  key: 'lesson',
  label: 'Lesson learned',
  placeholder: 'e.g. inspect seals weekly',
  weight: 10
}];
function hoursAgo(h) {
  const d = new Date(Date.now() - h * 3600e3);
  return d.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
}
const SEED_NOTES = [{
  id: 's1',
  time: hoursAgo(7.2),
  machine: 'Injection Press 2',
  reason: 'power fault',
  action: 'replaced motor',
  complete: true
}, {
  id: 's2',
  time: hoursAgo(6.1),
  machine: 'Moulding Machine 4',
  reason: 'oil leak',
  action: 'patched hydraulic line',
  complete: true
}, {
  id: 's3',
  time: hoursAgo(5.0),
  machine: 'Packaging Line 2',
  reason: 'quality defect',
  action: 'quarantined batch',
  complete: true
}, {
  id: 's4',
  time: hoursAgo(3.5),
  machine: 'Extruder 2',
  reason: 'dimensional out-of-spec',
  action: 'raised work order',
  complete: true
}, {
  id: 's5',
  time: hoursAgo(2.5),
  machine: 'Moulding Machine 3',
  reason: 'overheating',
  action: 'adjusted setpoint',
  complete: true
}, {
  id: 's6',
  time: hoursAgo(1.0),
  machine: 'Compressor Room',
  reason: 'hydraulic pressure drop',
  action: 'opened valve',
  complete: false
}];
function scoreFields(f) {
  return FIELD_META.reduce((a, {
    key,
    weight
  }) => a + (f[key] && f[key].trim() ? weight : 0), 0);
}
Object.assign(window, {
  DEMO_SCRIPT,
  DEMO_FIELDS,
  DEMO_TAGS,
  FIELD_META,
  SEED_NOTES,
  scoreFields
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/capture_app/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/capture_app/screens.jsx
try { (() => {
// ShiftVoice capture app — the three flow screens.

// ── Demo script card (collapsible) ──────────────────────────────
function DemoScriptCard() {
  const [open, setOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      borderRadius: 'var(--radius-2xl)',
      border: '1px solid var(--sv-teal-a25)',
      background: 'var(--sv-teal-a06)',
      overflow: 'hidden',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '13px 18px',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(SvEyebrow, {
    color: "var(--sv-teal)"
  }, "Demo script \u2014 say this aloud"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sv-teal)',
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement(SvIcon, {
    name: "chevron",
    size: 18,
    stroke: "var(--sv-teal)"
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 18px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.55,
      fontStyle: 'italic',
      background: '#fff',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 16
    }
  }, "\u201C", DEMO_SCRIPT, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "Hits all 5 fields \u2014 expect ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--sv-green)'
    }
  }, "100 / 100")), /*#__PURE__*/React.createElement(SvButton, {
    size: "sm",
    variant: copied ? 'primary' : 'primary',
    onClick: () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    },
    style: copied ? {
      background: 'var(--sv-green)'
    } : {}
  }, copied ? '✓ Copied' : 'Copy text'))));
}

// ── Voice capture widget ────────────────────────────────────────
function VoiceCapture({
  onTranscript
}) {
  const [state, setState] = React.useState('idle'); // idle | recording | processing | done
  const [dur, setDur] = React.useState(0);
  const timer = React.useRef(null);
  React.useEffect(() => () => clearInterval(timer.current), []);
  const fmt = ms => `${String(Math.floor(ms / 60000)).padStart(2, '0')}:${String(Math.floor(ms / 1000) % 60).padStart(2, '0')}`;
  const start = () => {
    setState('recording');
    setDur(0);
    timer.current = setInterval(() => setDur(d => d + 1000), 1000);
  };
  const stop = () => {
    clearInterval(timer.current);
    setState('processing');
    setTimeout(() => setState('done'), 1600);
  };
  const label = {
    idle: 'Ready to capture',
    recording: 'Recording…',
    processing: 'Transcribing with Whisper…',
    done: 'Transcription complete'
  }[state];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 22,
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement(SvEyebrow, null, label), state === 'idle' && /*#__PURE__*/React.createElement("button", {
    onClick: start,
    "aria-label": "Record",
    style: {
      width: 96,
      height: 96,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--sv-teal)',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(SvIcon, {
    name: "mic",
    size: 40,
    stroke: "#fff"
  })), state === 'recording' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: stop,
    "aria-label": "Stop",
    style: {
      width: 96,
      height: 96,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--sv-red)',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'sv-pulse 1.4s ease-in-out infinite'
    }
  }, /*#__PURE__*/React.createElement(SvIcon, {
    name: "stop",
    size: 36,
    stroke: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26,
      fontWeight: 600,
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, fmt(dur))), state === 'processing' && /*#__PURE__*/React.createElement(SvSpinner, null), state === 'done' && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-2xl)',
      padding: 18,
      fontSize: 15,
      lineHeight: 1.55,
      background: 'var(--surface-page)',
      color: 'var(--text-primary)'
    }
  }, "\u201C", DEMO_SCRIPT, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SvButton, {
    fullWidth: true,
    onClick: () => onTranscript(DEMO_SCRIPT),
    iconRight: /*#__PURE__*/React.createElement(SvIcon, {
      name: "arrowRight",
      size: 18,
      stroke: "#fff"
    })
  }, "Continue"), /*#__PURE__*/React.createElement(SvButton, {
    variant: "ghost",
    onClick: () => setState('idle')
  }, "Re-record"))));
}

// ── Shift event log ─────────────────────────────────────────────
function ShiftEventLog({
  notes
}) {
  if (!notes.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(SvEyebrow, {
    style: {
      display: 'block',
      marginBottom: 10
    }
  }, "Shift log \u2014 ", notes.length, " events"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      maxHeight: 230,
      overflowY: 'auto'
    }
  }, notes.map(n => /*#__PURE__*/React.createElement("div", {
    key: n.id,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      background: '#fff',
      border: '1px solid var(--sv-navy-a08)',
      borderRadius: 'var(--radius-md)',
      padding: '11px 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 5,
      width: 9,
      height: 9,
      borderRadius: '50%',
      flexShrink: 0,
      background: n.complete ? 'var(--sv-green)' : 'var(--sv-amber)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, n.machine), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      flexShrink: 0
    }
  }, n.time)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: 12.5,
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, n.reason, " \u2014 ", n.action))))));
}

// ── Screen 1: Capture ───────────────────────────────────────────
function CaptureScreen({
  notes,
  onTranscript
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      textAlign: 'center',
      margin: '0 0 6px',
      color: 'var(--text-primary)'
    }
  }, "Capture shift note"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      textAlign: 'center',
      color: 'var(--text-secondary)',
      margin: '0 0 24px',
      lineHeight: 1.5
    }
  }, "Tap the mic and describe the event. Mention the machine, component, problem, and what you did."), /*#__PURE__*/React.createElement(DemoScriptCard, null), /*#__PURE__*/React.createElement(VoiceCapture, {
    onTranscript: onTranscript
  }), /*#__PURE__*/React.createElement(ShiftEventLog, {
    notes: notes
  }));
}

// ── Screen 2: Review ────────────────────────────────────────────
function ReviewScreen({
  onSave,
  onBack
}) {
  const [fields, setFields] = React.useState({
    ...DEMO_FIELDS
  });
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);
  const score = scoreFields(fields);
  const complete = score >= 60;
  const missing = FIELD_META.filter(m => !fields[m.key] || !fields[m.key].trim()).map(m => m.label);
  if (loading) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement(SvSpinner, null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, "Extracting fields with Llama 3.1\u2026"));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      textAlign: 'center',
      margin: '0 0 6px',
      color: 'var(--text-primary)'
    }
  }, "Review & confirm"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      textAlign: 'center',
      color: 'var(--text-secondary)',
      margin: '0 0 24px'
    }
  }, "Llama 3.1 extracted these fields. Edit anything that looks wrong."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-2xl)',
      padding: 16,
      fontSize: 14,
      lineHeight: 1.55,
      background: 'var(--surface-page)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(SvEyebrow, {
    color: "var(--sv-teal)",
    style: {
      display: 'block',
      marginBottom: 4
    }
  }, "Transcript"), "\u201C", DEMO_SCRIPT, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, DEMO_TAGS.map(t => /*#__PURE__*/React.createElement(SvTag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, FIELD_META.map(({
    key,
    label,
    placeholder,
    weight
  }) => {
    const filled = fields[key] && fields[key].trim();
    return /*#__PURE__*/React.createElement(Field, {
      key: key,
      label: label,
      value: fields[key] || '',
      placeholder: placeholder,
      onChange: e => setFields(f => ({
        ...f,
        [key]: e.target.value
      })),
      scoreState: filled ? 'filled' : 'missing',
      hint: filled ? `+${weight}pts` : `missing (${weight}pts)`
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Completeness"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: complete ? 'var(--sv-green)' : 'var(--sv-amber)'
    }
  }, score, "/100 \u2014 ", complete ? 'Complete' : 'Incomplete')), /*#__PURE__*/React.createElement(SvProgress, {
    value: score
  }), !complete && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--sv-amber)',
      margin: 0
    }
  }, "Add: ", missing.join(', '), " to reach 60pts")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement(SvButton, {
    variant: "secondary",
    onClick: onBack
  }, "\u2190 Back"), /*#__PURE__*/React.createElement(SvButton, {
    fullWidth: true,
    variant: complete ? 'primary' : 'amber',
    onClick: () => onSave({
      fields,
      score,
      complete
    })
  }, complete ? 'Save note' : 'Save anyway (incomplete)'))));
}

// A local Field (mirrors forms/Field) so the kit is self-contained.
function Field({
  label,
  value,
  onChange,
  placeholder,
  hint,
  scoreState,
  multiline,
  rows = 3
}) {
  const [focus, setFocus] = React.useState(false);
  const stateColor = {
    filled: 'var(--sv-green)',
    missing: 'var(--sv-amber)'
  }[scoreState] || 'var(--border-default)';
  const hintColor = {
    filled: 'var(--sv-green-ink)',
    missing: 'var(--sv-amber-ink)'
  }[scoreState] || 'var(--text-secondary)';
  const st = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-ui)',
    fontSize: 14,
    color: 'var(--text-primary)',
    background: '#fff',
    border: `1px solid ${focus ? 'var(--action-primary)' : stateColor}`,
    borderRadius: 'var(--radius-sm)',
    padding: '10px 14px',
    outline: 'none',
    boxShadow: focus ? 'var(--shadow-focus)' : 'none',
    transition: 'all var(--dur-fast)',
    resize: multiline ? 'vertical' : undefined
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: 'var(--text-primary)'
    }
  }, label), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: hintColor
    }
  }, hint)), multiline ? /*#__PURE__*/React.createElement("textarea", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: st
  }) : /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: st
  }));
}

// ── Screen 3: Saved ─────────────────────────────────────────────
function SavedScreen({
  saved,
  onNew
}) {
  const {
    fields,
    score,
    complete
  } = saved;
  const rows = [['Reason', fields.reason], ['Machine', fields.machine], ['Component', fields.component], ['Action', fields.actionTaken], ['Lesson', fields.lesson]].filter(r => r[1]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 22,
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-lg)',
      background: complete ? 'var(--sv-green)' : 'var(--sv-amber)'
    }
  }, /*#__PURE__*/React.createElement(SvIcon, {
    name: complete ? 'check' : 'mic',
    size: 38,
    stroke: "#fff",
    sw: 2.5
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      margin: '0 0 4px',
      color: 'var(--text-primary)'
    }
  }, "Note saved"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "Completeness: ", score, "/100 \u2014 ", complete ? 'fully captured' : 'marked incomplete')), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      borderRadius: 'var(--radius-2xl)',
      padding: 20,
      boxShadow: 'var(--shadow-sm)',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontSize: 14
    }
  }, rows.map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 88,
      flexShrink: 0,
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.03em',
      color: 'var(--text-secondary)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      paddingTop: 4
    }
  }, DEMO_TAGS.map(t => /*#__PURE__*/React.createElement(SvTag, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      borderRadius: 'var(--radius-2xl)',
      padding: 18,
      background: 'rgba(47,143,99,0.08)',
      border: '1px solid rgba(47,143,99,0.3)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(SvIcon, {
    name: "link",
    size: 18,
    stroke: "var(--sv-green)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--sv-green)'
    }
  }, "Looks like a follow-up")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, "This note matches your earlier note on ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "Moulding Machine 3"), " \u2014 overheating. Both are saved separately in this shift's log.")), /*#__PURE__*/React.createElement(SvButton, {
    fullWidth: true,
    onClick: onNew
  }, "Capture another note"));
}
Object.assign(window, {
  CaptureScreen,
  ReviewScreen,
  SavedScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/capture_app/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.StepIndicator = __ds_scope.StepIndicator;

})();
