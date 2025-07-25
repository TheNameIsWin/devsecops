resource "mongodbatlas_database_user" "my_user" {
  username           = "myuser"
  password           = "MySecurePass123"
  project_id         = var.project_id
  auth_database_name = "admin"
  roles {
    role_name     = "readWriteAnyDatabase"
    database_name = "admin"
  }
}
