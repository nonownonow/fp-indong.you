const rewire = require("rewire")
const ch2 = rewire("./ch2")
const f = ch2.__get__("f")
const iifTest = ch2.__get__("iifTest")
const fn3 = ch2.__get__("fn3")
const namedFn = ch2.__get__("namedFn")
const namedFn2 = ch2.__get__("namedFn2")
// @ponicode
describe("f", () => {
    test("0", () => {
        let callFunction = () => {
            f("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            f("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            f("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            f(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ch2.measureTime", () => {
    test("0", () => {
        let callFunction = () => {
            ch2.measureTime("callback detected, not supported yet", 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            ch2.measureTime("callback detected, not supported yet", -5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            ch2.measureTime("callback detected, not supported yet", 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            ch2.measureTime("callback detected, not supported yet", -100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            ch2.measureTime("callback detected, not supported yet", 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            ch2.measureTime(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ch2.measureTime_perfomance", () => {
    test("0", () => {
        let callFunction = () => {
            ch2.measureTime_perfomance(80)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            ch2.measureTime_perfomance(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            ch2.measureTime_perfomance(32)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            ch2.measureTime_perfomance(11)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            ch2.measureTime_perfomance(1000)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            ch2.measureTime_perfomance(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ch2.fn1", () => {
    test("0", () => {
        let callFunction = () => {
            ch2.fn1()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ch2.fn2", () => {
    test("0", () => {
        let callFunction = () => {
            ch2.fn2()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ch2.hoisting", () => {
    test("0", () => {
        let callFunction = () => {
            ch2.hoisting()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ch2.hoisting2", () => {
    test("0", () => {
        let callFunction = () => {
            ch2.hoisting2()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("iifTest", () => {
    test("0", () => {
        let callFunction = () => {
            iifTest()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("fn3", () => {
    test("0", () => {
        let callFunction = () => {
            fn3()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ch2.L", () => {
    test("0", () => {
        let callFunction = () => {
            ch2.L("<?xml version=\"1.0\" ?>\n<a b=\"c\"/>\n=> ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            ch2.L("<?xml version=\"1.0\" ?>\n<a b=\"c\"/>\n=>=><?xml version=\"1.0\" ?><a b=\"c\"/>")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            ch2.L("   <?xml version=\"1.0\" ?>\n<a b=\"c\"/>\n=>=><?xml version=\"1.0\" ?><a b=\"c\"/>")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            ch2.L("<?xml version=\"1.0\" ?>\n<a b=\"c\"/>\n=>")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            ch2.L("=>")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            ch2.L(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("namedFn", () => {
    test("0", () => {
        let callFunction = () => {
            namedFn()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("namedFn2", () => {
    test("0", () => {
        let callFunction = () => {
            namedFn2()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ch2.namedFn3", () => {
    test("0", () => {
        let callFunction = () => {
            ch2.namedFn3()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ch2.flatten2", () => {
    test("0", () => {
        let callFunction = () => {
            ch2.flatten2([10, -45.9, 103.5, 0.955674])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            ch2.flatten2(["foo bar", -0.353, "**text**", 4653])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            ch2.flatten2([-1, 0.5, 1, 2, 3, 4, 5])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            ch2.flatten2(["a", "b", "043", "holasenior"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            ch2.flatten2(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ch2.thisTest", () => {
    test("0", () => {
        let callFunction = () => {
            ch2.thisTest("rgb(0,100,200)", "rgb(0.1,0.2,0.3)", "#FF00FF")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            ch2.thisTest("black", "rgb(20%,10%,30%)", "black")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            ch2.thisTest("rgb(0,100,200)", "rgb(0.1,0.2,0.3)", "red")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            ch2.thisTest("#F00", "#FF00FF", "rgb(20%,10%,30%)")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            ch2.thisTest("green", "red", "black")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            ch2.thisTest(undefined, undefined, "")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ch2.applyTest", () => {
    test("0", () => {
        let callFunction = () => {
            ch2.applyTest()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ch2.toArray", () => {
    test("0", () => {
        let callFunction = () => {
            ch2.toArray([-1, 0.5, 1, 2, 3, 4, 5])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            ch2.toArray([10, -45.9, 103.5, 0.955674])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            ch2.toArray(["a", "b", "043", "holasenior"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            ch2.toArray(["foo bar", -0.353, "**text**", 4653])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            ch2.toArray(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ch2.testParenthese", () => {
    test("0", () => {
        let callFunction = () => {
            ch2.testParenthese()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ch2.testParenthese2", () => {
    test("0", () => {
        let callFunction = () => {
            ch2.testParenthese2(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            ch2.testParenthese2("email@Google.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            ch2.testParenthese2("something.example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            ch2.testParenthese2("bed-free@tutanota.de")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            ch2.testParenthese2("ponicode.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            ch2.testParenthese2(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ch2.testParenthese3", () => {
    test("0", () => {
        let callFunction = () => {
            ch2.testParenthese3(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            ch2.testParenthese3(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            ch2.testParenthese3(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            ch2.testParenthese3(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            ch2.testParenthese3(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            ch2.testParenthese3(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ch2.testParenthese4", () => {
    test("0", () => {
        let callFunction = () => {
            ch2.testParenthese4(-5.48, -5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            ch2.testParenthese4(100, -100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            ch2.testParenthese4(100, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            ch2.testParenthese4(0, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            ch2.testParenthese4(-100, -5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            ch2.testParenthese4(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
