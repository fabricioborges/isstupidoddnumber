import supertest from 'supertest';
import server from '../../src/server';
const request = supertest(server);

describe('testes relacionados ao código de barra de produtos', () => {
    it('deveria retorar se o código de barra enviado é impar', async () => {
        const data = {
            "barCode": "1357"
        }

        const response = await request.post('/products').send(data);
   
        expect(response.body).toBeTruthy();
    })

    it('deveria retorar falso se o código de barra enviado não é impar', async () => {
        const data = {
            "barCode": "1358"
        }

        const response = await request.post('/products').send(data);       

        expect(response.body).toBeFalsy();
    })
})