import styled from "styled-components";

export const StyledHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    .log__in-btn{
        background-color: inherit;
        color: rgba(178, 159, 126, 1);
        border: 1px solid rgba(178, 159, 126, 1);
        width: 160px;
        height: 44px;
        padding: 11px, 0px, 11px, 0px;
        border-radius: 5px;
        gap: 10px;
        margin-right: 10px;
    }

    .sign_up-btn , .sign_out-btn {
        background: rgba(178, 159, 126, 1);
        color: #fff;
        width: 160px;
        height: 44px;
        padding: 11px, 0px, 11px, 0px;
        border-radius: 5px;
        gap: 10px;
        border: 0;
    }

    .btn {
        margin-top: 18px;
        margin-bottom: 18px;
        font-family: Merriweather;
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0px;
        text-align: center;
    }


`;