using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ILP.Core.Data.Entities.Models
{
    public class Comment : IEntity
    {
        [Key, Column("CommentId")]
        public string Id { get; set; } = null!;
        [Required]
        public string Text { get; set; } = null!;
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public string AuthorId { get; set; } = null!;
        public User? Author { get; set; }
        [Required]
        public string PostId { get; set; } = null!;
        [JsonIgnore]
        public Post? Post { get; set; }
    }
}
