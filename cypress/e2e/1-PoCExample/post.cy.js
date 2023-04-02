/// <reference types="cypress" />
describe('post the request', () => {
    let accessToken = 'f810abec70b5c34c0ab6a2cca59a227b0f187107667371c0868e3c63748dbbbb'

    it('create post in the article', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
           body:{
            "name": "morpheus",
            "job": "leader"
            }  

        }).then((res)=>{
            expect(res.status).to.be.eq(201)
            expect(res.body.name).to.contain("morpheus")

        })
    })

})