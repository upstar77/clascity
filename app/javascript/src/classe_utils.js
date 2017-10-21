import Logger from './logger';

export function getExperienceString(exp) {
  switch (exp) {
    case 'exp_1':
      return '1 year';
    case 'exp_2':
      return '2 years';
    case 'exp_3':
      return '3 years';
    case 'exp_4':
      return '4 years';
    case 'exp_5':
      return '5+ years';
    case 'exp_10':
      return '10+ years';
    default:
      Logger.error('getExperienceString - default case');
      return '';
  }
}
