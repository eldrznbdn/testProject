import styled from 'styled-components';

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto; 
  padding: 0; 
  a {
        text-decoration: none;
    }
    
    li {
        list-style-type: none;
    }

/* 2xl */
@media (max-width: 1536px) {
    max-width: 1280px;
}

/* xl */
@media (max-width: 1280px) {
    max-width: 1024px;
}

/* lg */
@media (max-width: 1024px) {
    max-width: 768px;
}

/* md */
@media (max-width: 768px) {
    max-width: 640px;
}

/* sm */
@media (max-width: 640px) {
    max-width: 475px;
}

/* xs */
@media (max-width: 475px) {
    width: 100%;
}
`;

export default Container;