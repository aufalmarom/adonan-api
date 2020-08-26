'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.create('profiles', (table) => {
      table.increments()
      table.string('first_name', 80)
      table.string('last_name', 80)
      table.string('email', 200)
      table.text('address')
      table.string('phone', 16)
      table.boolean('status')
      table.date('dob')
      table.text('desc')
      table.timestamps()
    })
  }

  down () {
    this.drop('profiles')
  }
}

module.exports = ProfileSchema
