import styled from 'styled-components';

const CustomButton = styled.button`
    height: 55px;
    border: 2px solid var(--design-blue);
    background-color: var(--design-blue);
    color: var(--design-gray);  
    font-size: var(--font-small);
    font-weight: 500;
    white-space: nowrap;
    padding: 0 24px;
    width: min-content;
    transition: 0.2s;

    &:hover {
        background-color: var(--design-gray);
        color: var(--design-blue);
    }
};`;

const Button = ({ text, onClick }) => {
  return <CustomButton onClick={onClick}>{text}</CustomButton>;
};

export default Button;
