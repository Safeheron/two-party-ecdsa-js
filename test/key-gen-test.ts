'use strict'
import {TPCEcdsaKeyGen} from ".."

describe('2-Party Ecdsa:', async function () {
    it('2-Party Key Generation', async function () {
        console.time('Key Generation')
        try {
            let p1Ctx = await TPCEcdsaKeyGen.P1Context.createContext()
            let p2Ctx = await TPCEcdsaKeyGen.P2Context.createContext()
            let message1 = p1Ctx.step1()
            let message2 = p2Ctx.step1(message1)
            let message3 = p1Ctx.step2(message2)
            p2Ctx.step2(message3)

            let keyShare1 = p1Ctx.exportKeyShare()
            let keyShare2 = p2Ctx.exportKeyShare()
            let keyShare1JsonStr = JSON.stringify(keyShare1.toJsonObject(), null, 4)
            let keyShare2JsonStr = JSON.stringify(keyShare2.toJsonObject(), null, 4)
            console.log("key share 1: \n", keyShare1JsonStr)
            console.log("key share 2: \n", keyShare2JsonStr)
        }catch (e) {
            console.error(e)
        }
        console.timeEnd('Key Generation')
    })
})
