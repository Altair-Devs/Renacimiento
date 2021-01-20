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
                  <a>Nosotros</a>
                </Link>
              </List.Item>
            </List>

						<a href="https://es.wikipedia.org/wiki/Renacimiento" target="blank">
							El Renacimiento
						</a>
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
              <a href="https://twitter.com/Irunga_Ray" target="blank">
                Irungaray{' '}
              </a>
              y{' '}
              <a href="https://github.com/NataliCalzia" target="blank">
                Natali Calzia{' '}
              </a>
              para{' '}
              <a href="https://github.com/Altair-Devs" target="blank">
                Altaïr Devs
              </a>
            </p>
            <List horizontal style={{ display: 'flex' }}>
              <List.Item
                icon="twitter"
                style={{ display: 'flex' }}
                content={
                  <a href="https://twitter.com/Altair-Devs" target="blank">
                    Twitter
                  </a>
                }
              />
              <List.Item
                icon="github"
                style={{ display: 'flex' }}
                content={
                  <a href="https://github.com/Altair-Devs" target="blank">
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
          Appreciate that you got all the way down here and read this.
          <br />
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
