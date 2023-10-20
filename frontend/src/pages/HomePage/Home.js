import React, { useEffect, useState } from 'react';
import Container from '../../components/Container/Container.styled';
import { Hero, OpenDeals } from './Home.styled';
import { Button } from 'antd';
import heroImage from './../../icons/hero.svg';
import styled from 'styled-components';
import { getAllChams } from '../../api';
import CardItem from '../../components/OpenDealsItem/Item';
import Layout from '../../components/Layout/Layout';

const HeroBackground = styled.div`
  /*background-image: url(${heroImage});
  background-size: cover;
  height: 944px;
  background-repeat: no-repeat;*/
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
`;

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const allChams = await getAllChams();
            setItems(allChams);
        };

        fetchData();
    }, []);

    return (
        <div>
            <Layout showButton={true}/>
            <HeroBackground>
                <Container style={{height:'var(--custom-height)'}}>
                    <Hero>
                        <h1>The chemical  negatively charged</h1>
                        <p>Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is.</p>
                        <Button className='get__started-btn'>Get Started</Button>
                    </Hero>
                </Container>
            </HeroBackground>
            <Container>
                <OpenDeals>
                    <h1>Open Deals </h1>
                    <p style={{color:'grey'}}>"I didn’t post photos on the background because I didn’t know how to insert them corectly to the database"</p>
                    <div>
                        {items.map((item) => (
                            <CardItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                tiket={item.tiket}
                                image={item.image}
                                price={item.price}
                                sold={item.sold}
                                yieldP={item.yield}
                                days={item.days}
                            />
                        ))}
                    </div>
                </OpenDeals>
            </Container>
        </div>
    )
}

export default Home;
