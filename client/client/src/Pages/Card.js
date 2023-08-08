import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function CardContainer1(props) {


  return (
    <div>

      <Container>
        {
          Object.entries(props).map((item, index) => {

            return (

              <Row key={index}><Col>
                {
                  item[1].map((item, index) => {
                    console.log(item.Date)
                    return (
                      
                        <div className="card">
                          <div className="card-body" >
                            <h5 className="card-title">{item.Date}</h5>
                          </div>
                        </div>
                      
                    )
                  }
                  )
                }
                </Col>
              </Row>
            )
          }
          )





        }





      </Container>
    </div>
  );
};

export default CardContainer1;
