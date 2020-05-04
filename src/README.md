# SmartBear Awesome List Generator

## About

Main `README.md` file (Awesome List) is generated from `db.yml` file and Handlebars template

### Database Structure

Structure of database (file `db.yml`) looks like this:

```yml
categories:
    - name: nice-category # Name of top-level category written in kebab-case
      title: Nice Category Title # Title of top-level category
      items:
        # List of categories goes here
        - name: category-one # Name of category written in kebab-case
          title: Category One # Title of category
        - name: category-two
          title: Category Two
repositories:
  - title: Some Awesome Tool # Repo title
    description: 'Tool just full of awesomeness' # Short description
    url: 'https://github.com/org/repo' # Repo URL
    categories:
      - category-one
      - category-two
```

This way one repository can be in multiple categories, and when there is some change needed - you just need to change it
in one place, not 3 for example.

### Template

Template of `README.md` is in `AWESOME-LIST.handlebars`
([link to Handlebars guide](https://handlebarsjs.com/guide/))

## Building

1. Install Dependencies

    ```sh
    npm ci
    ```

1. Build

    ```sh
    npm run build
    ```

1. Check if generated README.md (in the root directory) has been properly created. Double-check git diff.

## License

[ISC License](LICENSE)
