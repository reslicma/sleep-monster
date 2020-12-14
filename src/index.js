/*!
 * sleep-monster v0.0.1
 * author @mabenliang
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.sleep = factory()) // eslint-disable-line
}(this, function () {
  'use strict'

  /**
   * error tips
   * @param {string} msg error tips
   */
  function errorTips (msg) {
    if (typeof msg !== 'string') {
      console.error('Error: The msg parameter must be of string type.')
      return false
    }
    console.error(msg)
  }

  /**
   * Asynchronous sleep (Non blocking thread mode)
   * @param {number} delay delay time
   * @return {boolean}
   */
  function asyncSleep (delay) {
    if (!Promise) {
      errorTips('Error: Promise is not supported in your current environment.')
      return false
    }

    if (typeof delay !== 'number' || delay < 0) {
      errorTips('Error: The delay parameter must be a number not less than 0.')
      return false
    }

    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(true)
      }, delay)
    })
  }

  /**
   * Synchronous sleep (Blocking thread mode)
   * @param {number} delay delay time
   * @return {boolean}
   */
  function syncSleep (delay) {
    if (typeof delay !== 'number' || delay < 0) {
      errorTips('Error: The delay parameter must be a number not less than 0.')
      return false
    }

    const startTime = +new Date()
    try {
      while (+new Date() - startTime < delay) {
        continue
      }
      return true
    } catch (e) {
      console.error(e)
      return false
    }
  }

  // class Sleep
  const Sleep = function () {
    this.asyncSleep = function (delay) {
      return asyncSleep(delay)
    }

    this.asyncSleepSeconds = function (delay) {
      return asyncSleep(delay * 1000)
    }

    this.asyncSleepMinutes = function (delay) {
      return asyncSleep(delay * 1000 * 60)
    }

    this.asyncSleepHours = function (delay) {
      return asyncSleep(delay * 1000 * 60 * 60)
    }

    this.asyncSleepDays = function (delay) {
      return asyncSleep(delay * 1000 * 60 * 60 * 24)
    }

    this.asyncSleepMonths = function (delay) {
      return asyncSleep(delay * 1000 * 60 * 60 * 24 * 30)
    }

    this.asyncSleepYears = function (delay) {
      return asyncSleep(delay * 1000 * 60 * 60 * 24 * 30 * 12)
    }

    this.syncSleep = function (delay) {
      return syncSleep(delay)
    }

    this.syncSleepSeconds = function (delay) {
      return syncSleep(delay * 1000)
    }

    this.syncSleepMinutes = function (delay) {
      return syncSleep(delay * 1000 * 60)
    }

    this.syncSleepHours = function (delay) {
      return syncSleep(delay * 1000 * 60 * 60)
    }

    this.syncSleepDays = function (delay) {
      return syncSleep(delay * 1000 * 60 * 60 * 24)
    }

    this.syncSleepMonths = function (delay) {
      return syncSleep(delay * 1000 * 60 * 60 * 24 * 30)
    }

    this.syncSleepYears = function (delay) {
      return syncSleep(delay * 1000 * 60 * 60 * 24 * 30 * 12)
    }
  }

  return new Sleep()
}))
