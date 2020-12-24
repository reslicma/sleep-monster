# sleep-monster

一个优雅的`JavaScript sleep`库，包含同步方式、异步方式即阻塞线程和非阻塞线程方式的`sleep`。

## 背景

> 这是一个不太正经的背景介绍。请理性阅读。

- 你可能遇到过这样的场景，项目打包部署之后，响应速度很快，网站性能很好，那么你一定会非常苦恼，因为这样的话，你没有什么理由能够让客户加钱了。而且因为现在项目的优化必须要提前做好，你也很难自己在写一套不优化的代码，那么我想`sleep-monster`可以帮到你。只需要引入函数、调用函数，几行代码即可让项目陷入沉睡任意时间，不需要改动你项目的任何配置代码，等到客户加钱之后，去掉这几行代码即可，`sleep-monster`拥有很好的灵活性。

- 此外，`sleep-monster`也是渐进式的，`sleep-monster`提供了很多方法，你可以利用这些方法逐步降低沉睡的时间，来达到多次让客户加钱的目的。
- 友情提示：如果遇到非常棘手并且冥顽不灵的客户，建议直接使用`syncSleepYears`函数，让客户长长记性。

## 安装

```shell
npm install sleep-monster
```

## 使用

> 注意：
>
> 1. `sleep-monster`将sleep函数分为了同步方式和异步方式两种。同步方式的sleep会阻塞线程，由于JavaScript是单线程的，所以这些同步方法会将所有的同步任务和异步任务阻塞，并且非常消耗性能，请谨慎使用，如果数值过大，轻则Chrome爆炸、电脑死机、风扇呼呼响，重则机毁人亡😂。
>
> 2. 异步方式的sleep不会阻塞线程，也不会造成严重的性能问题，但是异步的sleep只能阻塞其当前作用域，并不是真正意义上的阻塞。

### 支持的方法

默认推荐使用`asyncSleep`和`syncSleep`这两个函数，默认参数单位是毫秒。所有可用函数如下：

异步函数（非阻塞线程）：

- `asyncSleep` 单位：毫秒
- `asyncSleepSeconds` 单位：秒
- `asyncSleepMinutes` 单位：分钟
- `asyncSleepHours` 单位：小时
- `asyncSleepDays` 单位：天
- `asyncSleepMonths` 单位：月
- `asyncSleepYears` 单位：年

同步函数（阻塞线程）：

- `syncSleep` 单位：毫秒
- `syncSleepSeconds` 单位：秒
- `syncSleepMinutes` 单位：分钟
- `syncSleepHours` 单位：小时
- `syncSleepDays` 单位：天
- `syncSleepMonths` 单位：月
- `syncSleepYears` 单位：年

### 异步的sleep使用

异步的`sleep`可以配合`async/await`或者`Promise`使用。

#### async/await

```javascript
import { asyncSleep } from 'sleep-monster'

const test = async () => {
  console.log('go to sleep...')
  const res = await asyncSleep(2000)
  /* sleep之后需要执行的代码 */
  console.log(res) // true
  console.log('2000ms later now')
}
test()

console.log('The synchronized code is still executed') // 无法阻塞其作用域之外的代码执行
```

#### Promise

```javascript
import { asyncSleep } from 'sleep-monster'

const test = () => {
  console.log('go to sleep...')
  asyncSleep(2000).then(res => {
    /* sleep之后需要执行的代码 */
    console.log(res) // true
    console.log('2000ms later now')
  })
}
test()

console.log('The synchronized code is still executed') // 无法阻塞其作用域之外的代码执行
```

### 同步的sleep使用

同步的sleep直接调用函数即可。

```javascript
import { syncSleep } from 'sleep-monster'

setTimeout(() => {
  console.log('3000ms') // 异步任务也被阻塞
}, 3000)

syncSleep(5000)

console.log('5000ms later now.Both synchronous and asynchronous code are blocked.') // 所有的同步任务和异步任务都被阻塞了
```

