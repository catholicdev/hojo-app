# Ionic React Guidelines

## 1. Styling components

We have 2 types of using CSS

### 1.1. Global styling

In `App.tsx` we have these lines

```tsx
import './theme/variables.css'
import './theme/font.css'
```

This is an example of global styling. CSS rules will be applied to all elements in the application.

### 1.2. Isolation styling

We use [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet) to apply isolated styling to a specific component.

Take an example of [OnBoarding page](https://github.com/Catholic-Design/hojo-app/blob/main/src/pages/OnBoarding/index.tsx), we can see the import of isolated CSS module:

```tsx
import styles from './OnBoarding.module.scss'

return (
  <IonPage>
    <IonContent fullscreen>
      <div className={styles.page}>
        <div className={styles.content}>
          ...
        </div>
      </div>
    </IonContent>
  </IonPage>
)
```

We can see that the stylesheet's name must follow the pattern `*.module.scss` and is imported as an object to use within the `tsx` file.

By this way, both [OnBoarding page](https://github.com/Catholic-Design/hojo-app/blob/main/src/pages/OnBoarding/index.tsx) and [Home page](https://github.com/Catholic-Design/hojo-app/blob/main/src/pages/Home/index.tsx) can have duplicate CSS selectors (such as `.page`) but still don't override each other's styles.  
