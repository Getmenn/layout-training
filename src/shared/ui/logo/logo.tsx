import classNames from 'classnames';

import s from './logo.module.scss';

interface IProps {
    className?: string;
    theme?: 'light' | 'dark';
}

export const Logo = ({
    className,
    theme = 'dark',
}: IProps) => {
    return (
        <div className={classNames(s.logoWrapper, className, s[theme])}>
            <div className={s.circle} />
            simple
            <div className={s.longCircle} />
            <div className={s.circle} />
        </div>
    );
};
