import React from 'react'
import Link from 'next/link'
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react'

const Footer = () => (
  <Segment
    vertical
    as="footer"
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="Sobre" />
            <List>
              <List.Item>
                <Link href="/about">
                  <p>
										<a>Nosotros</a> <br />
										<a href="https://es.wikipedia.org/wiki/Renacimiento" target="blank">El Renacimiento</a>
									</p>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="Obras" />
            <List>
              <List.Item>
                <Link href="/">
                  <a>Todas las obras</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">Hecho por</Header>
            <p>
              <a href="https://twitter.com/Irunga_Ray">Irungaray{' '}</a>
							y {' '}
              <a href="https://github.com/NataliCalzia">Natali Calzia{' '}</a>
              para {' '}
							<a href="https://github.com/Altair-Devs">Altaïr Devs</a>
            </p>
            <List horizontal style={{ display: 'flex' }}>
              <List.Item
                icon="twitter"
                style={{ display: 'flex' }}
                content={<a href="https://twitter.com/Altair-Devs">Twitter</a>}
              />
              <List.Item
                icon="github"
                style={{ display: 'flex' }}
                content={
                  <a href="https://github.com/Altair-Devs">
                    GitHub
                  </a>
                }
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="colophon">
        <p className="colophon-entry">
				If you are a fan of classic art too, thanks for your interest! <br />
				Appreciate that you got all the way down here and read this.<br />
				Take care!
        </p>
      </div>
    </Container>

    <style jsx>{`
      .colophon {
        text-align: center;
        margin-top: 3.2rem;
        font-size: 0.8rem;
      }
      .colophon-entry {
        color: grey;
        margin-bottom: 0;
      }
    `}</style>
  </Segment>
)

export default Footer
