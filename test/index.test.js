/*!
 * jest test case
 * author @mabenliang
 */

const sleep = require('../src/index')
const {
  asyncSleep,
  asyncSleepSeconds,
  asyncSleepMinutes,
  asyncSleepHours,
  asyncSleepDays,
  asyncSleepMonths,
  asyncSleepYears,
  syncSleep,
  syncSleepSeconds,
  syncSleepMinutes,
  syncSleepHours,
  syncSleepDays,
  syncSleepMonths,
  syncSleepYears
} = sleep


test('should be function type', () => {
  expect(typeof asyncSleep).toBe('function')
  expect(typeof asyncSleepSeconds).toBe('function')
  expect(typeof asyncSleepMinutes).toBe('function')
  expect(typeof asyncSleepHours).toBe('function')
  expect(typeof asyncSleepDays).toBe('function')
  expect(typeof asyncSleepMonths).toBe('function')
  expect(typeof asyncSleepYears).toBe('function')
  expect(typeof syncSleep).toBe('function')
  expect(typeof syncSleepSeconds).toBe('function')
  expect(typeof syncSleepMinutes).toBe('function')
  expect(typeof syncSleepHours).toBe('function')
  expect(typeof syncSleepDays).toBe('function')
  expect(typeof syncSleepMonths).toBe('function')
  expect(typeof syncSleepYears).toBe('function')
})

test('asyncSleep should be executed correctly', async () => {
  const startTime = +new Date()
  const result = await asyncSleep(1000)
  expect(result).toBe(true)
  expect(startTime <= +new Date() - 1000).toBeTruthy()
})

test('syncSleep should be executed correctly', () => {
  const startTime = +new Date()
  const result = syncSleep(1000)
  expect(result).toBe(true)
  expect(startTime <= +new Date() - 1000).toBeTruthy()
})

test('asyncSleepSeconds should be executed correctly', async () => {
  const startTime = +new Date()
  const result = await asyncSleepSeconds(1)
  expect(result).toBe(true)
  expect(startTime <= +new Date() - 1000).toBeTruthy()
})

test('syncSleepSeconds should be executed correctly', () => {
  const startTime = +new Date()
  const result = syncSleepSeconds(1)
  expect(result).toBe(true)
  expect(startTime <= +new Date() - 1000).toBeTruthy()
})

test('asyncSleepMinutes should be executed correctly', async () => {
  const startTime = +new Date()
  const result = await asyncSleepMinutes(1 / 60)
  expect(result).toBe(true)
  expect(startTime <= +new Date() - 1000).toBeTruthy()
})

test('syncSleepMinutes should be executed correctly', () => {
  const startTime = +new Date()
  const result = syncSleepMinutes(1 / 60)
  expect(result).toBe(true)
  expect(startTime <= +new Date() - 1000).toBeTruthy()
})

test('asyncSleepHours should be executed correctly', async () => {
  const startTime = +new Date()
  const result = await asyncSleepHours(1 / (60 * 60))
  expect(result).toBe(true)
  expect(startTime <= +new Date() - 1000).toBeTruthy()
})

test('syncSleepHours should be executed correctly', () => {
  const startTime = +new Date()
  const result = syncSleepHours(1 / (60 * 60))
  expect(result).toBe(true)
  expect(startTime <= +new Date() - 1000).toBeTruthy()
})

test('asyncSleepDays should be executed correctly', async () => {
  const startTime = +new Date()
  const result = await asyncSleepDays(1 / (60 * 60 * 24))
  expect(result).toBe(true)
  expect(startTime <= +new Date() - 1000).toBeTruthy()
})

test('syncSleepDays should be executed correctly', () => {
  const startTime = +new Date()
  const result = syncSleepDays(1 / (60 * 60 * 24))
  expect(result).toBe(true)
  expect(startTime <= +new Date() - 1000).toBeTruthy()
})

test('asyncSleepMonths should be executed correctly', async () => {
  const startTime = +new Date()
  const result = await asyncSleepMonths(1 / (60 * 60 * 24 * 30))
  expect(result).toBe(true)
  expect(startTime <= +new Date() - 1000).toBeTruthy()
})

test('syncSleepMonths should be executed correctly', () => {
  const startTime = +new Date()
  const result = syncSleepMonths(1 / (60 * 60 * 24 * 30))
  expect(result).toBe(true)
  expect(startTime <= +new Date() - 1000).toBeTruthy()
})

test('asyncSleepYears should be executed correctly', async () => {
  const startTime = +new Date()
  const result = await asyncSleepYears(1 / (60 * 60 * 24 * 30 * 12))
  expect(result).toBe(true)
  expect(startTime <= +new Date() - 1000).toBeTruthy()
})

test('syncSleepYears should be executed correctly', () => {
  const startTime = +new Date()
  const result = syncSleepYears(1 / (60 * 60 * 24 * 30 * 12))
  expect(result).toBe(true)
  expect(startTime <= +new Date() - 1000).toBeTruthy()
})
