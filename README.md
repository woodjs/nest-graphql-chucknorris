# nest-graphql-chucknorris

Приложение для получение шуток с https://api.chucknorris.io/ с использованием NestJS, TypeScript, GraphQL, postgreSQL + ORM Sequelize.

## Установка и запуск проекта

`git clone https://github.com/woodjs/nest-graphql-chucknorris.git`

` cd nest-graphql-chucknorris`
Измените учетные данные базы данных PostgreSQL в `.env`

` npm install`

` npm start` или ` npm start:dev`

Откройте в браузере url: http://localhost:3000/graphql

## Получение данных

### Случайная шутка

```
{
    findByFilters {
        id,
        icon_url,
        url,
        value,
        created_at,
        updated_at
    }
}
```

![image](https://user-images.githubusercontent.com/45289944/162180783-986fde65-5146-493a-82b6-f8e7a49319cc.png)

### Шутка по категорий

```
{
    findByFilters(input: { category: "fashion" }) {
        id,
        icon_url,
        url,
        value,
,
        created_at,
        updated_at
    }
}
```

![image](https://user-images.githubusercontent.com/45289944/162180921-38a5784c-9e2e-48f9-bef0-f464492a9ea4.png)

### Шутка по ключевому слову

```
{
    findByFilters(input: { query: "name" }) {
        id,
        icon_url,
        url,
        value,
        created_at,
        updated_at
    }
}
```

![image](https://user-images.githubusercontent.com/45289944/162181066-deb9ea85-8921-4bc7-97e9-2323d8142895.png)

### Кол-во шуток

```
{
    findByFilters(input: { query: "name", limit: 1 }) {
        id,
        icon_url,
        url,
        value,
        created_at,
        updated_at
    }
}
```

![image](https://user-images.githubusercontent.com/45289944/162181172-e5b81e2f-4d5f-4b23-a07d-ac4dea63cd0e.png)

### Добавить шутку(-и) в избранное

```
{
    findByFilters(input: { query: "name", limit: 2, addFavorite: true }) {
        id,
        icon_url,
        url,
        value,
        created_at,
        updated_at
    }
}
```

![image](https://user-images.githubusercontent.com/45289944/162181332-848e49d6-2d44-4a16-8183-a73906e18c26.png)

### Избранные шутки

```
{
    findAll {
        id,
        icon_url,
        url,
        value,
        created_at,
        updated_at
    }
}
```

![image](https://user-images.githubusercontent.com/45289944/162181909-b43b8103-4a88-406f-8a01-e252d4d170fa.png)
