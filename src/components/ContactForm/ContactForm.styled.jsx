import styled from '@emotion/styled';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 360px;
    padding: 20px;
    outline: 2px solid black;
    border-radius: 4px;
`;

export const FormLabel = styled.label`
    font-weight: 700;
`;

export const FormInput = styled.input`
    padding: 8px;
    width: 240px;
    border-radius: 4px;
`;

export const FormBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    padding: 4px 16px;
    margin-top: 24px;
    font-size: 16px;
    background-color: #c4c4fc;
    border-radius: 4px;
    border-color: #a4a4ff; 

    &:hover,
    &:focus {
        background-color: #a4a4ff;
    }
`;