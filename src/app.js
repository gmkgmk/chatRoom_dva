import dva from 'dva';
import createHistory from "history/createBrowserHistory";
import OnError from './plugins/onError'
import createLoading from 'dva-loading';
let basename = process.env.NODE_ENV === "production" ? "room/" : "/"

// 1. 初始化
const app = dva({
  history: createHistory(),
  basename,
});

// 2. Plugins
app.use(createLoading());
app.use(OnError)
// 3. Register global model
// 4. Router
app.router(require('./router').default);


export default app; 