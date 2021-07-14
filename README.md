# 20210715: 코드 스플리팅(code spliting)

- SPA의 단점. JS 번들 파일에 모든 로직을 불러와서 규모가 커지면 용량이 커지기 때문에 로딩속도가 지연됨.
- 배포하기 전에 '빌드'작업을 거침.
- '빌드'작업은 파일의 크기를 최소화(불필요한 주석, 공백 제거 등)하고 브라우저에서 JSX문법이나 다른 최신 JS문법이 원활히 실행되게 도와주고, 이미지와 같은 정적파일의 경로도 설정함.
- 이 '빌드'작업은 웹팩(Webpack)이 담당.
- SplitChunks라는 기능을 통해 자주 바뀌지 않는 코드들은 2로 시작하는 파일에 들어가서 캐싱의 이점을 누림.
- 이렇게 파일을 분리하는 작업을 "코드 스플리팅"이라고 함.
- SplitChunks를 사용한 코드 스플리팅은 모든 JS를 하나의 파일로 합치기 때문에 처음부터 모든 컴포넌트를 불러온다 -> 필요하지 않은 컴포넌트도 처음부터 불러오기 때문에 비효율적이다.
- 코드 비동기 로딩: 모든 컴포넌트를 차음부터 불러오지 않고, 필요한 시점에 필요한 컴포넌트를 불러와서 실행
- - 1. React.lazy와 Suspense를 통한 컴포넌트 비동기 렌더링 - 서버 사이드 렌더링 지원X
- - 2. Loadable Components를 통한 컴포넌트 비동기 렌더링 - 서버 사이드 렌더링 지원O
- React.lazy: 컴포넌트를 렌더링하는 시점에서 비동기적으로 로딩할 수 있게 해주는 유틸 함수, Suspense: 코드 스플리팅된 컴포넌트를 로딩하도록 발동시킬수 있고 , 로딩이 끝나지 않았을 때 보여줄 UI를 설정해줄 수 있는 컴포넌트
- Suspense는 fallback props를 통해 로딩 중에 보여줄 JSX를 지정할 수 있다.
- Loadable Components를 통한 코드 스플리팅: 코드 스플리팅을 편하게 하도록 도와주는 서드파티 라이브러리(서버 사이드 렌더링을 지원)

# Props와 State

- props는 부모 컴포넌트가 설정하고, state는 컴포넌트 자체적으로 지난 값으로 컴포넌트 내부에서 값을 업데이트 할 수 있다.
- 부모 컴포넌트의 state를 자식 컴포넌트의 props로 전달하고, 자식 컴포넌트에서 특정 이벤트가 발생할 때 부모 컴포넌트의 메서드를 호출하면 props도 유동적으로 사용 가능.

# ref

- 특정 DOM에 작업을 수행할 때
- ★ DOM을 꼭 직접적으로 건드려야 할 때
- 함수형 컴포넌트에서 ref를 사용하려면 Hooks를 사용해야 한다.

# 컴포넌트 반복

- arr.map(callback, [thisArg])
- callback: currentValue + index + array
- key: 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용

# ★★★★★★★★★Hooks

- useState: 함수형 컴포넌트에서 상태관리
- - useState는 배열을 반환 - 1. 원소의 상태 값, 2. 상태를 설정하는 함수
- - 하나의 useState 함수는 하나의 상태 값만 관리 가능.
- useEffect: 렌더링 직후 작업 설정(Mount, Update)
- - 뒷정리하기: Update나 Unmount 직전에 수행
- useReducer: useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해주고 싶을 때 사용
- - 현재 상태, 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환
- - useReducer(리듀서 함수, 해당 리듀서의 기본값)
- - state와 dispatch 함수를 반환 (state: 현재 가리키고 있는 상태, dispatch: 액션을 발생시키는 함수)
- - 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 꺼낼 수 있다.
- useMemo: 함수형 컴포넌트 내부에서 발생하는 연산을 최적화
- - 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 수행, 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용
- useCallback: 주로 렌더링 성능을 최적화할 때 사용.
- - 이벤트 핸들러 함수를 필요할 때만 생성할 수 있다.
- - Average.js에서 함수를 만들 수가 있다. 이때 컴포넌트가 리렌더링될 때마다 이 함수들이 새로 생성된다.
- - 첫번째 arg에 생성하고 싶은 함수, 두번째 arg에 배열(어떤 값이 바뀌었을 때 함수를 새로 생성할 지)

# Redux

- 상태 관리 라이브러리
- 상태 업데이트 관련 로직을 다른 파일로 분리시켜서 더욱 효율적으로 관리할 수 있다.
- 컴포넌트끼리 똑같은 상태를 공유할 때도 여러 컴포넌트로 거치지 않고 상태 값을 전달하거나 업데이트할 수 있다.
- 전역 상태를 관리할 때 효과적

### 액션

- 상태에 어떠한 변화가 필요하면 액션이란 것이 발생(객체로 표현)
- 반드시 type필드를 가진다.
- 액션 생성 함수: 액션 객체를 만들어 줌.

### 리듀서

- 변화를 일으키는 함수
- 액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아옴.

### 스토어

- 프로젝트에 리덕스를 적용하기 위해 스토어를 만듬
- 한 개의 프로젝트는 하나의 스토어만을 가진다.
- 현재 애플리케이션 상태와 리듀서가 들어가 있다.

### 디스패치

- 스토어의 내장 함수 중 하나.
- 액션을 발생시키는 것 - dispatch(action)
- 이 함수가 호출되면 스토어는 리듀서 함수를 실행시켜서 새로운 상태를 만듬.

### 구독

- 스토어의 내장 함수 중 하나
- subscribe 함수 안에 리스너 함수를 파라미터로 넣어서 호출해주면, 리스너 함수가 액션이 디스패치되어 상태가 업데이트 될 때마다 호출.

# React-Router

- <BrowserRouter />: History API를 사용하여 페이지를 새로고침하지 않고도 주소를 변경하고, 현재 주소에 관련된 정보를 props로 쉽게 조회하거나 사용할 수 있도록 해준다.
- <Route path component />: 어떤 규칙을 가진 경로에 어떤 컴포넌트를 보여 줄지 정의.
- <Link to />: 페이지 전환, 페이지를 새로 불러오지 않고 애플리케이션은 그대로 유지한 상태에서 History API를 사용하여 페이지의 주소만 변경, a태그와는 다르게 페이지 전환을 방지하는 기능이 내장되어 있다.
- URL 파라미터: ex)/alpha, 일반적으로 특정 아이디 혹은 이름을 사용하여 조회할 때
- - 해당값을 props로 받아와서 조회, 라우트로 사용되는 컴포넌트에서 받아오는 match라는 객체 안의 params값을 참조.
- 쿼리: ex)?page=1, 어떤 키워드를 검색하거나 페이지에 필요한 옵션을 전달할 때
- - location 객체에 들어있는 search값에서 조회 가능, location 객체는 라우트로 사용된 컴포넌트에게 props로 전달되며, 웹 애플리케이션의 현재 주소에 대한 정보를 지니고 있다.
- - qs 라이브러리 사용
- 서브라우트: 라우트 내부의 라우트
- 리액트 라우터 부가 기능
- - history: 라우트로 사용된 컴포넌트에 match, location과 함께 전달되는 props중 하나, 컴포넌트 내에 구현하는 메서드에서 라우터 API를 호출, ex)특정 버튼을 눌렀을 때 뒤로 가거나, 로그인 후 화면을 전환하거나, 다른 페이지로 이탈하는 것을 방지해야 할 때.
- - withRouter: HoC(Higher-order Component), 라우트로 사용된 컴포넌트가 아니어도 match, location, history객체를 접근할 수 있게 해준다.
