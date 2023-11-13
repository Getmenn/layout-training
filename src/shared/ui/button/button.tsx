import classNames from 'classnames';

import s from './button.module.scss';

interface IProps{
    className?: string;
    content: string
}

export const Button = ({
    className,
    content,
}: IProps) => {
    return (
        <button
            className={classNames(s.button, className)}
            type="button"
        >
            {content}
        </button>
    );
};
