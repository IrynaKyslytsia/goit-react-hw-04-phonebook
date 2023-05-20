import styled from '@emotion/styled';

export const Text = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin: 0;
`;

export const DeleteBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 4px 16px;
    font-size: 14px;
    background-color: #c4c4fc;
    border-radius: 4px;
    border-color: #a4a4ff; 

    &:hover,
    &:focus {
        background-color: #a4a4ff;
    }
`