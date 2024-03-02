import { getDegrees } from "./api"

describe('api', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    describe('getDegrees', () => {
        test('should correctly fetch degrees', async () => {
            globalThis.fetch = vi.fn().mockResolvedValueOnce({
                json: () => Promise.resolve({
                    degrees: 32
                })
            })

            const degrees = await getDegrees('Milano')
            expect(globalThis.fetch).toHaveBeenCalledWith('/foo/Milano')
            expect(degrees).toBe(32)
        })
    })
})