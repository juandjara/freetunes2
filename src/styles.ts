// export const focusWithinCN = [
//   'focus-within:ring',
//   'focus-within:ring-slate-200',
//   'focus-within:ring-opacity-50',
//   'focus-within:ring-offset-0'
// ].join(' ')

export const focusCN = [
  `focus:border-stone-300`,
  'focus:ring',
  `focus:ring-stone-200`,
  'focus:ring-opacity-50',
  'focus:ring-offset-0'
].join(' ')

export const inputCN = [
  'block',
  'w-full',
  'min-w-0',
  'px-2 py-2',
  'rounded-md',
  'shadow-sm',
  'disabled:opacity-50',
  // 'border',
  // 'border-stone-300',
  // 'dark:border-stone-500',
  'text-stone-700',
  // 'dark:text-stone-100',
  // 'bg-stone-50',
  // 'dark:bg-stone-800',
  'placeholder:text-stone-400',
  // 'dark:placeholder:text-stone-500',
  focusCN
].join(' ')

export const checkboxCN = [`text-purple-600`, 'border-stone-500', 'shadow-sm', 'disabled:opacity-50', focusCN].join(' ')

const buttonCommon = ['font-medium', 'disabled:opacity-50'].join(' ')

export const buttonCN = {
  common: buttonCommon,
  small: `px-2 py-1 text-sm ${buttonCommon}`,
  normal: `px-4 py-2 ${buttonCommon}`,
  big: `px-5 py-3 text-lg ${buttonCommon}`,
  primary: [
    'text-green-600 bg-white'
    // 'dark:bg-purple-200 dark:hover:bg-purple-300'
  ].join(' '),
  iconLeft: 'flex items-center gap-2 pl-2',
  cancel: 'hover:bg-stone-100 dark:hover:bg-stone-100/25',
  delete: 'text-red-700 bg-red-50 hover:bg-red-100',
  shadow: 'transition-shadow duration-300 shadow-sm hover:shadow'
}

export const labelCN = 'text-stone-500 dark:text-stone-300 text-sm'
export const linkCN = 'text-purple-700 dark:text-purple-300 hover:underline'
export const cardCN = 'bg-white dark:bg-stone-700 rounded-md border border-stone-300 dark:border-stone-500 p-3'
export const headingCN = 'mb-4 text-4xl font-medium text-gray-500 dark:text-gray-300'
export const shadowCN = 'hover:shadow-md dark:hover:shadow hover:dark:shadow-purple-300'
